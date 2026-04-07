import React from 'react';
import { fullDeck, getCardLabel, getCardImageSrc, getCardValue } from './deck';


export function Table({ user, onPlayerWin }) {
  const [deck, setDeck] = React.useState([]);
  const [playerHand, setPlayerHand] = React.useState([]);
  const [dealerHand, setDealerHand] = React.useState([]);
  const [bustPopup, setBustPopup] = React.useState(null); // { who: 'Player'|'Dealer', total: number } or null
  const [winPopup, setWinPopup] = React.useState(null); // { who: string, message: string } or null
  const [gameState, setGameState] = React.useState('start'); // 'start' | 'playing' | 'dealerTurn' | 'roundOver'
  const recordedWinThisRound = React.useRef(false);

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

  function handleHit() {
    if (gameState === 'dealerTurn' || gameState === 'roundOver') return;
    drawRandomCard('player');
    setGameState('playing');
  }

  function handleStand() {
    if (gameState === 'dealerTurn' || gameState === 'roundOver') return;
    if (playerTotal > 21) return;
    setGameState('dealerTurn');
  }

  const playerTotal = playerHand.reduce((sum, cardId) => sum + (getCardValue(cardId) ?? 0), 0);
  const dealerTotal = dealerHand.reduce((sum, cardId) => sum + (getCardValue(cardId) ?? 0), 0);

  React.useEffect(() => {
    if (playerTotal > 21) {
      setBustPopup({ who: 'Player', total: playerTotal });
      setGameState('roundOver');
    } else if (dealerTotal > 21 && gameState !== 'dealerTurn') {
      setBustPopup({ who: 'Dealer', total: dealerTotal });
    }
    if (playerTotal === 21 && playerHand.length >= 2) {
      setWinPopup({ who: 'Player', message: `Blackjack! Total is ${playerTotal}.` });
      if (!recordedWinThisRound.current) {
        recordedWinThisRound.current = true;
        onPlayerWin?.(user);
      }
    } else if (dealerTotal === 21 && dealerHand.length >= 2 && gameState !== 'dealerTurn') {
      setWinPopup({ who: 'Dealer', message: `Blackjack! Total is ${dealerTotal}.` });
    } console.log(gameState);
  }, [playerTotal, dealerTotal, gameState, playerHand.length, dealerHand.length]);

  React.useEffect(() => {
    if (gameState !== 'dealerTurn') return;
    if (dealerTotal > 21) {
      setWinPopup({ who: 'Player', message: 'Dealer busted! You win.' });
      if (!recordedWinThisRound.current) {
        recordedWinThisRound.current = true;
        onPlayerWin?.(user);
      }
      setGameState('roundOver');
      return;
    }
    if (dealerTotal >= 17) {
      if (playerTotal > dealerTotal) {
        setWinPopup({ who: 'Player', message: `You win! ${playerTotal} beats ${dealerTotal}.` });
        if (!recordedWinThisRound.current) {
          recordedWinThisRound.current = true;
          onPlayerWin?.(user);
        }
      } else if (dealerTotal > playerTotal) {
        setWinPopup({ who: 'Dealer', message: `Dealer wins! ${dealerTotal} beats ${playerTotal}.` });
      } else {
        setWinPopup({ who: null, message: `Push. Both have ${playerTotal}.` });
      }
      setGameState('roundOver');
      return;
    }
    const t = setTimeout(() => drawRandomCard('dealer'), 800);
    return () => clearTimeout(t);
  }, [gameState, dealerTotal, playerTotal]);

  function handleNewGame() {
    setDeck(fullDeck());
    setPlayerHand([]);
    setDealerHand([]);
    setGameState('start');
    setBustPopup(null);
    setWinPopup(null);
    recordedWinThisRound.current = false;
  }

  return (
    <main className="background-image1">
        {bustPopup && (
          <div className="table-bust-overlay" role="alert">
            <div className="table-bust-popup">
              <p className="table-bust-message">
                {bustPopup.who} busts! Total is {bustPopup.total} (over 21).
              </p>
              <button className="table-button" onClick={() => setBustPopup(null)}>OK</button>
            </div>
          </div>
        )}
        {winPopup && (
          <div className="table-bust-overlay" role="alert">
            <div className="table-bust-popup">
              <p className="table-bust-message">
                {winPopup.who ? `${winPopup.who} wins! ` : ''}{winPopup.message}
              </p>
              <button className="table-button" onClick={() => setWinPopup(null)}>OK</button>
            </div>
          </div>
        )}
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
          <div className="table-card-row-value">Dealer (Total: {dealerTotal})</div>
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
          <div className="table-card-row-value">Player (Total: {playerTotal})</div>
          <div className="table-button-container">
            <button className="table-button" onClick={handleNewGame}>New Game</button>
            <button className="table-button" onClick={handleHit} disabled={gameState === 'dealerTurn' || gameState === 'roundOver' || playerTotal > 21}>Hit</button>
            <button className="table-button" onClick={handleStand} disabled={gameState === 'dealerTurn' || gameState === 'roundOver' || playerHand.length === 0 || playerTotal > 21}>Stand</button>
          </div>
        </section>

        <section className="table-chat" aria-label="Table chat">
          <fieldset id="chat-controls" className="table-chat-box table-chat-fieldset">
            <textarea
              id="new-msg"
              className="table-chat-input table-chat-textarea"
              placeholder="Message"
              autoComplete="off"
              rows={3}
            />
          </fieldset>
          <fieldset id="name-controls" className="table-chat-name-fieldset" aria-hidden="true">
            <input type="hidden" id="my-name" value={user ?? ''} readOnly />
          </fieldset>
          <div id="chat-text" className="table-chat-box table-chat-messages"> Messages Here</div>
        </section>
    </main> 
  );
}