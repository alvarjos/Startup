import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Table } from './table/table';
import { Rules } from './rules/rules';
import { Scores } from './scores/scores';



export default function App() {
  return (
    <BrowserRouter>
      <div className="page background-image1"> 
      <Layout></Layout>
      
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/table' element={<Table />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

        <footer className="footer">
            <span className="text-reset">Angel Alvarado </span>
            <a className="text-reset" href="https://github.com/webprogramming260/simon-react">
              Source
            </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/";
  return (
    < >     
      {!hideHeader && <header>
        <div className="nav-bar">
        <ul>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </ul>
        <ul>
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </ul>
        <ul>
          <NavLink className="nav-link" to="table">
            Table
          </NavLink>
        </ul>
        <ul>
          <NavLink className="nav-link" to="rules">
            Rules
          </NavLink>
        </ul>
        <ul>
          <NavLink className="nav-link" to="scores">
            Scores
          </NavLink>
        </ul>
      </div> 
      </header>}
    </>
  );
}