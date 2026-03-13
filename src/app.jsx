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

function Layout({ user, onLogOut }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const hideHeader = location.pathname === "/";
  const showLogout = LOGOUT_PATHS.includes(location.pathname);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {!hideHeader && (
        <header className={menuOpen ? "nav-menu-open" : ""}>
          <div className="nav-bar">
            <button
              type="button"
              className="nav-menu-btn"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              Menu
            </button>
            <nav className="nav-links">
              <ul>
                <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
              </ul>
              {user && (
                <ul>
                  <NavLink className="nav-link" to="login" onClick={closeMenu}>Login</NavLink>
                </ul>
              )}
              <ul>
                <NavLink className="nav-link" to="table" onClick={closeMenu}>Table</NavLink>
              </ul>
              <ul>
                <NavLink className="nav-link" to="rules" onClick={closeMenu}>Rules</NavLink>
              </ul>
              <ul>
                <NavLink className="nav-link" to="scores" onClick={closeMenu}>Scores</NavLink>
              </ul>
              {showLogout && (
                <ul>
                  <NavLink className="nav-link" to="/" onClick={() => { closeMenu(); onLogOut(); }}>Logout</NavLink>
                </ul>
              )}
            </nav>
          </div>
        </header>
      )}
    </>
  );
}