const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up websocket client HTML
app.use(express.static('public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Create websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocl upgrade from HTTP to websocket 
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
    });
});

// Keeps track of all connections for forwarding messages 
let connections = [];

wss.on('connection', (ws) => {
    const connection = { id: connections.length + 1, alive: true, ws: ws };
    connections.push(connection);

    // Forward messages to everyone except the sender
    ws.on('message', function message(data) { 
        connections.forEach((c) => {
            if (c.id !== connection.id) {
                c.ws.send(data);
            }
        });
    });

    // Remove the closed connetion so we don;t forward to anyone else
    ws.on('close', () => {
        connection.findIndex((o, i) => {
            if (o.id === connection.id) {
                connections.splice(i, 1);
                return true;
            }
        });
    });

    // Respond to pong messages by marking conneciton as alive 
    ws.on('pong', () => {
        connection.alive = true;
    });
});

// Keep connection alive 
setInterval(() => {
    connections.forEach((c) => {
        if (!c.alive) {
            c.ws.terminate();
        } else {
            c.alive = false;
            c.ws.ping();
        }
    });
}, 10000);


// wss.on('connection', (ws) => {
//   ws.on('message', (data) => {
//     const msg = String.fromCharCode(...data);
//     console.log('received: %s', msg);

//     ws.send(`I heard you say "${msg}"`);
//   });

//   ws.send('Hello webSocket');
// });