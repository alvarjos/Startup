import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/index';
import { Login } from './login/login';
import { Scores } from './scores/scores';
import { Table } from './table/table';
import { Rules } from './rules/rules';


export default function App() {
  return (
    <BrowserRouter>
        Simon<sup>&reg;</sup>
        <li className="nav-item">
          <NavLink className="nav-link" to="">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="scores">
            Scores
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="rules">
            Rules
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="table">
            Table
          </NavLink>
        </li>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/table' element={<Table />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Angel Alvarado</span>
            <a className="text-reset" href="https://github.com/webprogramming260/simon-react">
              Source
            </a>
          </div>
        </footer>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}