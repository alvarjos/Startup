import React from 'react';
import { fullDeck, getCardLabel, getCardImageSrc, getCardValue } from './deck';


export function Table() {
  const [deck, setDeck] = React.useState([]);
  const [playerHand, setPlayerHand] = React.useState([]);
  const [dealerHand, setDealerHand] = React.useState([]);
  const [gameState, setGameState] = React.useState('start');

  function drawRandomCard(target) {
    setDeck((currentDeck) => {
      if (currentDeck.length === 0) {
        return currentDeck;
      }

      const nextDeck = [...currentDeck];
      const randomIndex = Math.floor(Math.random() * nextDeck.length);
      const card = nextDeck.splice(randomIndex, 1)[0];

      if (target === 'player') {
        setPlayerHand((hand) => [...hand, card]);
      } else if (target === 'dealer') {
        setDealerHand((hand) => [...hand, card]);
      }

      return nextDeck;
    });
  }

  function handleNewGame() {
    setDeck(fullDeck());
    setPlayerHand([]);
    setDealerHand([]);
    setGameState('start');
  }

  function handleHit() {
    drawRandomCard('player');
    setGameState('hit');

    // The dealer hits 1 second after the player hits to allow some time between player and dealer to replicate a real game
    setTimeout(() => {
      drawRandomCard('dealer');
    }, 1000);
  }

  return (
    <main className="background-image1">
        Game Table Area
        <br /><br />
        <section className="table-card-area">
          <div className="table-card-row-label">Dealer</div>
          <div className="table-card-row">
            {dealerHand.map((cardId, index) => {
              const src = getCardImageSrc(cardId);
              const label = getCardLabel(cardId) ?? getCardValue(cardId) ?? cardId;
              return (
                <div key={`dealer-${index}`} className="card-placeholder-text">
                  {src ? (
                    <div className="card-wrapper">
                      <img className="card-placeholder-img" src={src} alt={`Card ${cardId}`} />
                      <div className="card-number-overlay">{label}</div>
                    </div>
                  ) : (
                    cardId
                  )}
                </div>
              )
            })}
          </div>
          <div className="table-card-row-label">Player</div>
          <div className="table-card-row">
            {playerHand.map((cardId, index) => {
              const src = getCardImageSrc(cardId);
              const label = getCardLabel(cardId) ?? getCardValue(cardId) ?? cardId;
              return (
                <div key={`player-${index}`} className="card-placeholder-text">
                  {src ? (
                    <div className="card-wrapper">
                      <img className="card-placeholder-img" src={src} alt={`Card ${cardId}`} />
                      <div className="card-number-overlay">{label}</div>
                    </div>
                  ) : (
                    cardId
                  )}
                </div>
              );
            })}
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