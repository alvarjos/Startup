import { Button } from 'bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  const [text, setText] = React.useState('');
  function loginUser() {
    console.log("Login button clicked");
    localStorage.setItem('user', text);
  }

  function textChange(e) {
    setText(e.target.value);
  }

  return (
    <main className="background-image1">
      Login Form:
      <form className="login-form" action="/submit_login" method="post">
          <label className="login-form-label" htmlFor="username">Username:</label>
          <input className="login-form-label" type="text" id="username" name="username" required onChange={textChange}/><br /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />
          <button type ="button" onClick={loginUser}>Login</button>
      </form>    
    </main>
  );
}