import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css';

function Page({ color }) {
  return (
    <div className="page" style={{ backgroundColor: color }}>
      <h1>{color}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/">Red</NavLink>
          <NavLink to="/orange">Orange</NavLink>
          <NavLink to="/purple">Purple</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Page color="red" />} exact />
            <Route path="/orange" element={<Page color="orange" />} />
            <Route path="/purple" element={<Page color="purple" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);