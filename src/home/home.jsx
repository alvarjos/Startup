import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home({user}) {
  return ( 
    <main className="background-image1">
        <nav className="main-nav">
            <ul><NavLink to="/">Home</NavLink></ul>
            <ul><NavLink to="/login">Login</NavLink></ul>
            <ul>{user && <NavLink to="/table">Table</NavLink>}</ul>
            <ul><NavLink to="/scores">High Scores</NavLink></ul>
            <ul><NavLink to="/rules">Game Rules</NavLink></ul>
            <ul>
              <a href="https://github.com/alvarjos/Startup">
                <img src="github-icon.webp" alt="GitHub" className="github-image" />
                <br />Github
              </a>
            </ul>
            <br />
        </nav>
      </main>
    );
  }