import React from 'react';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Table } from './table/table';
import { Rules } from './rules/rules';
import { Scores } from './scores/scores';

export default function App() {
  const [user, setUser] = React.useState(localStorage.getItem('user') || '');

  async function addWinForPlayer(username) {
    if (!username) return;
    await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
      credentials: 'include',
    });
  }

  async function logOut() {
    await fetch('/api/auth/logout', { method: 'DELETE', credentials: 'include' });
    setUser('');
  }

  return (
    <BrowserRouter>
      <div className="page background-image1"> 
      <Layout user={user} onLogOut={logOut}></Layout>
      
      <main>
        <Routes>
          <Route path='/' element={<Home user={user}/>} exact />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/table' element={user ? <Table user={user} onPlayerWin={addWinForPlayer} /> : <Navigate to="/login" />} />
          <Route path='/scores' element={<Scores user={user} />} />
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

const LOGOUT_PATHS = ['/table', '/rules', '/scores'];

function Layout({user, onLogOut}) {
  const location = useLocation();
  const hideHeader = location.pathname === "/";
  const showLogout = LOGOUT_PATHS.includes(location.pathname);
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
        {showLogout && (
          <ul>
            <NavLink className="nav-link" to="/" onClick={onLogOut}>
              Logout
            </NavLink>
          </ul>
        )}
      </div>
      </header>}
    </>
  );
}