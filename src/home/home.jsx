import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return ( 
    <main className="background-image1">
        <nav>
            <ul><NavLink to="/home">Home</NavLink></ul>
            <ul><NavLink to="/login">Login</NavLink></ul>
            <ul><NavLink to="/table">Play Game</NavLink></ul>
            <ul><NavLink to="/scores">High Scores</NavLink></ul>
            <ul><NavLink to="/rules">Game Rules</NavLink></ul>
            <ul>
              <a href="https://github.com/alvarjos/Startup">
                <img src="/images/github-icon.webp" alt="GitHub" className="github-image" />
                <br />Github
              </a>
            </ul>
            <br />
        </nav>
      </main>
    );
  }