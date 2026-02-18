import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
    <main className="background-image1">
      <nav>
          <ul className="nav-bar">
              <NavLink to="/home.html">Home Page</NavLink>
              <NavLink to="/login.html">Login</NavLink>
              <NavLink to="/table.html">Play Game</NavLink>
              <NavLink to="/scores.html">High Scores</NavLink>
              <NavLink to="/rules.html">Game Rules</NavLink>
          </ul>
      </nav>
      Login Form:
      <form className="login-form" action="/submit_login" method="post">
          <label className="login-form-label" htmlFor="username">Username:</label>
          <input className="login-form-label" type="text" id="username" name="username" required /><br /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />
          <input type="submit" value="Login" />
      </form>    
    </main>
  );
}