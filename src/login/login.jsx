import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login({ setUser }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function loginUser() {
    setError(null);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.username);
      navigate('/table');
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.msg || 'Login failed');
    }
  }

  async function createUser() {
    setError(null);
    const res = await fetch('/api/auth/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.username);
      navigate('/table');
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.msg || 'Create account failed');
    }
  }

  return (
    <main>
      <br />
      Login Form:
      <form className="login-form">
        <label className="login-form-label" htmlFor="username">Username:</label>
        <input
          className="login-form-label"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="table-button" type="button" onClick={loginUser} disabled={!username || !password}>
          Login
        </button>
        <br />
        <button className="table-button" type="button" onClick={createUser} disabled={!username || !password}>
          Create account
        </button>
      </form>
    </main>
  );
}