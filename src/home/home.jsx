import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home({user}) {
  const [weather, setWeather] = React.useState(null);
  const [weatherError, setWeatherError] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;
    fetchCurrentWeather()
    .then((temp) => {
      if (!cancelled) setWeather(temp);
    })
    .catch((err) => {
      if (!cancelled) setWeatherError('Could not load weather');
      console.error(err);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function fetchCurrentWeather() {
    const latitude = 40.23; 
    const longitude = -111.66;


    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${latitude}&longitude=${longitude}` +
      `&current=temperature_2m`;

    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Weather request failed');
    }
    const data = await res.json();
    return data.current.temperature_2m;
  }
  
  return ( 
    <main className="background-image1">
        <nav className="main-nav">
            <ul><NavLink to="/">Home</NavLink></ul>
            <ul><NavLink to="/login">Login</NavLink></ul>
            {user && <ul><NavLink to="/table">Table</NavLink></ul>}
            <ul><NavLink to="/scores">High Scores</NavLink></ul>
            <ul><NavLink to="/rules">Game Rules</NavLink></ul>
            <ul>
              <a href="https://github.com/alvarjos/Startup">
                <img src="github-icon.webp" alt="GitHub" className="github-image" />
                <br />Github
              </a>
            </ul>
            <ul>
              {weather && (
                <p>Current Temperature in Provo, UT: {(weather * 9 /5 + 32).toFixed(1)}°F</p>
              )}
              {weatherError && (
                <p>Error: {weatherError}</p>
              )}
            </ul>
            <br />
        </nav>
      </main>
    );
  }