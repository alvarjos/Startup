import React from 'react';

export function Scores({ user, playerWins = [] }) {
  const currentUserWins = user
    ? (playerWins.find((p) => p.username === user)?.wins ?? 0)
    : null;

  return (
    <main className="background-image1">
      <h1>Welcome to the High Scores Page!</h1>
      {user && (
        <section className="scores-your-wins">
          <h2>Your total wins</h2>
          <p className="scores-total-wins">{currentUserWins}</p>
        </section>
      )}
      <section className="scores-tables">
        <h2>All players – total wins</h2>
        <table id="scoresTable" border="1">
          <thead>
            <tr>
              <th>Username</th>
              <th>Total wins</th>
            </tr>
          </thead>
          <tbody>
            {playerWins.length === 0 ? (
              <tr>
                <td colSpan="2">No scores yet. Win a game to appear here!</td>
              </tr>
            ) : (
              playerWins.map(({ username, wins }) => (
                <tr key={username} className={username === user ? 'scores-current-user' : ''}>
                  <td>{username}</td>
                  <td>{wins}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}