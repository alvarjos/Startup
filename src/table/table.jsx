import React from 'react';

export function Table() {
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
        Game Table Area
        <br /><br />
        <section>
            {/* <!-- Game interface elements would go here --> */}
          <img src="/images/Table Design.drawio.png" alt="Game Table" />
        </section>
            {/* <!-- Console Log
            <section id="consoleLog">
                Game messages and updates would be displayed here -->
        
        
        <!-- Chat messages will appear here --> */}
          <section id="chatLog">
            <div className="chat-header">Chat Log</div>

            <div className="chat-messages">
              <div className="chat-row">
                <div className="chat-user">User 001</div>
                <div className="chat-messages">Message will go right here</div>
              </div>

              <div className="chat-row">
                  <div className="chat-user">User 002</div>
                  <div className="chat-messages">Another message will go right here</div>
              </div>

              <div className="chat-row">
                <div className="chat-user">User 003</div>
                <div className="chat-messages">Another message will go right here</div>
              </div>

              <div className="chat-row">
                <div className="chat-user">User 004</div>
                <div className="chat-messages">Another message will go right here</div>
              </div>

              <div className="chat-row">
                <div className="chat-user">User 005</div>
                <div className="chat-messages">Another message will go right here</div>
              </div>

              <div className="chat-row">
                <div className="chat-user">User 006</div>
                <div className="chat-messages">Another message will go right here</div>
              </div>
            </div>    
          </section>
        </main>
  );
}