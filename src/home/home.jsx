import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <main className="background-image1">
        <nav>
            <ul>
              <li><NavLink to="/home.html">Home</NavLink></li>
              <li><NavLink to="/login.html">Login</NavLink></li>
              <li><NavLink to="/table.html">Play Game</NavLink></li>
              <li><NavLink to="/scores.html">High Scores</NavLink></li>
              <li><NavLink to="/rules.html">Game Rules</NavLink></li>
              <li><a href="https://github.com/alvarjos/Startup">
                <img src="/images/github-iccon.webp" alt="GitHub" className="github-image" /><br />Github</a></li>
            </ul>
          </nav>
        </main>
    );
  }