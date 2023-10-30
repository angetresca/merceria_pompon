import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './assets/logo.jpeg';

import './assets/css/App.css';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <img className='logo' src={logo} alt='logo' />
        <h1>Mercería Pompón</h1>
        <ul className='nav-links'>
          <li>
            <Link className='nav-link' to="/">Inicio</Link>
          </li>
          <li>
            <Link className='nav-link' to="/products">Productos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
