import React from 'react';

export function Scores({ user }) {
  const [scores, setScores] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch('/api/scores', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error(res.status === 401 ? 'Please log in to view scores.' : 'Failed to load scores');
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setScores(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [user]);

  const currentUserWins = user
    ? (scores.find((p) => (p.username || '').toLowerCase() === (user || '').toLowerCase())?.wins ?? 0)
    : null;

  return (
    <main className="background-image1">
      <h1>Welcome to the High Scores Page!</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && !error && (
        <section className="scores-your-wins">
          <h2>Your total wins</h2>
          <p className="scores-total-wins">{loading ? '...' : currentUserWins}</p>
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
            {loading ? (
              <tr><td colSpan="2">Loading...</td></tr>
            ) : scores.length === 0 ? (
              <tr><td colSpan="2">No scores yet. Win a game to appear here!</td></tr>
            ) : (
              scores.map(({ username, wins }) => (
                <tr key={username} className={username === user ? 'scores-current-user' : ''}>
                  <td>{username}</td>
                  <td>{wins ?? 0}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}