const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const { WebSocketServer, WebSocket } = require('ws');
const app = express();
const { connectDb, addScore, getHighScores, addUser, getUser, getUserByToken, setUserToken, clearUserToken } = require('./database.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);
    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('username', req.body.username);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const newToken = uuid.v4();
        await setUserToken(user.username, newToken);
        setAuthCookie(res, newToken);
        res.send({ username: user.username });
        return;
      }
    }
    res.status(401).send({ msg: 'Invalid username or password' });
  });

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    await clearUserToken(user.username);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  };

// GetScores
apiRouter.get('/scores', verifyAuth, async (_req, res) => {
  try {
    const sorted = await getHighScores();
    res.send(sorted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to load scores' });
  }
});

// Test
var testdata = {test:"testdata"};
apiRouter.get('/test', verifyAuth, (_req, res) => {
  res.send(testdata);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, async (req, res) => {
  const username = (req.body && req.body.username) ? String(req.body.username).trim() : '';
  if (!username) {
    res.status(400).json({ msg: 'Username required' });
    return;
  }
  try {
    await addScore(username);
    const sorted = await getHighScores();
    res.send(sorted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to save score' });
  }
});

  async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      username,
      password: passwordHash,
      token: uuid.v4(),
    };
    await addUser(user);
    return user;
  }
  
  async function findUser(field, value) {
    if (!value) return null;
    if (field === 'username') {
      return await getUser(value);
    }
    if (field === 'token') {
      return await getUserByToken(value);
    }
    return null;
  }
  
  // setAuthCookie in the HTTP response
  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'strict',
    });
  }
  
  function setupWebSocket(server) {
    const wss = new WebSocketServer({ noServer: true });
    let nextConnectionId = 1;
    const connections = [];

    server.on('upgrade', (request, socket, head) => {
      let pathname;
      try {
        pathname = new URL(request.url, `http://${request.headers.host || 'localhost'}`).pathname;
      } catch {
        socket.destroy();
        return;
      }
      if (pathname !== '/ws') {
        socket.destroy();
        return;
      }
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    });

    wss.on('connection', (ws) => {
      const connection = { id: nextConnectionId++, alive: true, ws };
      connections.push(connection);

      ws.on('message', (data) => {
        connections.forEach((c) => {
          if (c.id !== connection.id && c.ws.readyState === WebSocket.OPEN) {
            c.ws.send(data);
          }
        });
      });

      ws.on('close', () => {
        const i = connections.findIndex((c) => c.id === connection.id);
        if (i !== -1) connections.splice(i, 1);
      });

      ws.on('pong', () => {
        connection.alive = true;
      });
    });

    setInterval(() => {
      connections.forEach((c) => {
        if (!c.alive) {
          c.ws.terminate();
          return;
        }
        c.alive = false;
        c.ws.ping();
      });
    }, 30000);
  }

  async function start() {
    await connectDb();
    const server = app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
    setupWebSocket(server);
  }

  start().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  })
  