import { Button } from 'bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Login({setUser}) {
  const [text, setText] = React.useState('');
  const navigate = useNavigate();
  function loginUser() {
    localStorage.setItem('user', text);
    setUser(text);
    navigate('/table');
  }

  function textChange(e) {
    setText(e.target.value);
  }

  return (
    <main >
      <br></br>
      Login Form:
      <form className="login-form" action="/submit_login" method="post">
          <label className="login-form-label" htmlFor="username">Username:</label>
          <input className="login-form-label" type="text" id="username" name="username" required onChange={textChange}/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required /><br /><br />
          <button className="table-button" type ="button" onClick={loginUser}>Login</button>
      </form>    
    </main>
  );
}