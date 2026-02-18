import React from 'react';

export function Scores() {
  return (
    <main className="background-image1">
      <h1>Welcome to the High Scores Page!</h1>
      <nav className="nav-bar">
          <NavLink to="/home.html">Home Page</NavLink>                    
          <NavLink to="/login.html">Login</NavLink>
          <NavLink to="/table.html">Play Game</NavLink>
          <NavLink to="/scores.html">High Scores</NavLink>
          <NavLink to="/rules.html">Game Rules</NavLink>
      </nav>
      <section className="scores-tables">
        Database of High Scores
        <table id="scoresTable" border="1">
        <tr>
            <th>Username</th>
            <th>High Score</th>
        </tr>
        <tr>
            <td>Alice</td>
            <td>1500</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>1200</td>
        </tr>
        <tr>
            <td>Charlie</td>
            <td>1800</td>
        </tr>
        </table>
      </section>
    </main>
  );
}