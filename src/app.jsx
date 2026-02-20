import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Scores } from './scores/scores';
import { Table } from './table/table';
import { Rules } from './rules/rules';


export default function App() {
  return (
    <BrowserRouter>
      <header></header>
      <body className='page'>
        <div className='background-image1'>
           <Layout></Layout>
        </div>
      </body>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/table' element={<Table />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="footer">
            <span className="text-reset">Angel Alvarado</span>
            <a className="text-reset" href="https://github.com/webprogramming260/simon-react">
              Source
            </a>
        </footer>
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
    <>     
      {!hideHeader && <div className="nav-bar">
        <ul className="nav-item">
          <NavLink className="nav-link" to="">
            Home
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink className="nav-link" to="scores">
            Scores
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink className="nav-link" to="rules">
            Rules
          </NavLink>
        </ul>
        <ul className="nav-item">
          <NavLink className="nav-link" to="table">
            Table
          </NavLink>
        </ul>
      </div> }
    </>
  );
}