import React from 'react';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Table } from './table/table';
import { Rules } from './rules/rules';
import { Scores } from './scores/scores';

const PLAYER_WINS_KEY = 'playerWins';

function loadPlayerWins() {
  try {
    const raw = localStorage.getItem(PLAYER_WINS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function savePlayerWins(arr) {
  localStorage.setItem(PLAYER_WINS_KEY, JSON.stringify(arr));
}

export default function App() {
  const [user, setUser] = React.useState(localStorage.getItem('user') || '');
  const [playerWins, setPlayerWins] = React.useState(() => loadPlayerWins());

  function addWinForPlayer(username) {
    if (!username) return;
    setPlayerWins((prev) => {
      const next = [...prev];
      const i = next.findIndex((p) => p.username === username);
      if (i >= 0) {
        next[i] = { ...next[i], wins: next[i].wins + 1 };
      } else {
        next.push({ username, wins: 1 });
      }
      savePlayerWins(next);
      return next;
    });
  }

  return (
    <BrowserRouter>
      <div className="page background-image1"> 
      <Layout user={user}></Layout>
      
      <main>
        <Routes>
          <Route path='/' element={<Home user={user}/>} exact />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/table' element={<Table user={user} onPlayerWin={addWinForPlayer} />} />
          <Route path='/scores' element={<Scores user={user} playerWins={playerWins} />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

        <footer className="footer">
            <span className="text-reset">{user} - </span>
            <a className="text-reset" href="https://github.com/webprogramming260/simon-react">
              Github
            </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

function Layout({user}) {
  const location = useLocation();
  const hideHeader = location.pathname === "/";
  return (
    < >     
      {!hideHeader && <header>
        <div className="nav-bar">
        <ul>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </ul>
        {user && <ul>
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </ul>}
        <ul>
          <NavLink className="nav-link" to="table">
            Table
          </NavLink>
        </ul>
        <ul>
          <NavLink className="nav-link" to="rules">
            Rules
          </NavLink>
        </ul>
        <ul>
          <NavLink className="nav-link" to="scores">
            Scores
          </NavLink>
        </ul>
      </div>
      </header>}
    </>
  );
}