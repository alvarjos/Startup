import React from 'react';
import { fullDeck } from './deck';

export function Table() {
  const [deck, setDeck] = React.useState([]);
  const [playerHand, setPlayerHand] = React.useState([]);
  const [dealerHand, setDealerHand] = React.useState([]);
  const [gameState, setGameState] = React.useState('start');

  function handleNewGame() {
    setDeck(fullDeck());
    setPlayerHand([]);
    setDealerHand([]);
    setGameState('start');
  }

  function handleHit() {
    setPlayerHand((hand) => [...hand, 'Card']);
    setGameState('hit');
  }

  return (
    <main className="background-image1">
        Game Table Area
        <br /><br />
        <section className="table-card-area">
          <div className="table-card-row-label">Dealer</div>
          <div className="table-card-row">
            {dealerHand.map((label, index) => (
              <div key={`dealer-${index}`} className="card-placeholder-text">
                {label}
              </div>
            ))}
          </div>
          <div className="table-card-row-label">Player</div>  
          <div className="table-card-row">
            {playerHand.map((label, index) => (
              <div key={`player-${index}`} className="card-placeholder-text">
                {label}
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleNewGame}>New Game</button>
            <button onClick={handleHit}>Hit</button>
            <button onClick={() => setGameState('stand')}>Stand</button>
          </div>
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