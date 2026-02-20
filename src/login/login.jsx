import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
    <main className="background-image1">
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