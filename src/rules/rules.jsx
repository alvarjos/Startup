import React from 'react';
import { NavLink } from 'react-router-dom';

export function Rules() {
  return (
    <main className="background-image1">
            <nav className="nav-bar">
                <NavLink to="/home.html">Home Page</NavLink>                    
                <NavLink to="/login.html">Login</NavLink>
                <NavLink to="/table.html">Play Game</NavLink>
                <NavLink to="/scores.html">High Scores</NavLink>
                <NavLink to="/rules.html">Game Rules</NavLink>
            </nav>
            
            <section className="rules-section">
                <h2>Objective</h2>
                Get your hand total as close to 21 as possible without going over, and beat the dealer.
                
                <h2>Card Values</h2>
                Number cards (2–10): Face value<br />
                Face cards (J, Q, K): 10<br />
                Ace (A): 1 or 11 (whichever helps your hand more)<br />
                
                <h2>Setup</h2>
                Each player is dealt 2 cards face up<br />
                Dealer gets 1 card face up and 1 face down (the “hole card”)<br />
                
                <h2>Player Actions</h2>
                Hit: Take another card<br />
                Stand: Keep your current hand<br />
                Bust: If your hand exceeds 21, you lose automatically<br />
                You can hit as many times as you want until you stand or bust.<br />
                
                <h2>Dealer Turn</h2>
                Dealer reveals their face-down card<br />
                Dealer must hit until they reach 17 or higher<br />
                Dealer must stand on 17+<br />
                If the dealer busts, remaining players win<br />
                
                <h2>Determining the winning hand</h2>
                <h4>You win if:</h4>
                <ul>
                    Total is higher than the dealer’s (without busting)
                    The dealer busts
                </ul>
                <h4>You lose if:</h4>
                <ul>
                    Your total is lower than the dealer’s
                    You bust
                </ul>
                <h4>Tie (Push)</h4>
                <ul>
                    If you and the dealer have the same total → no one wins, you keep your bet
                </ul>
                <h2>Quick Summary</h2>
                Goal: Beat the dealer without going over 21<br />
                Players go first, dealer goes last<br />
                Dealer follows fixed rules, players choose freely<br />
          </section>
    </main>
  );
}