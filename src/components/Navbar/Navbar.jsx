// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ cartCount, isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="logo">☕ KopiKita</Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/home" onClick={() => setMenuOpen(false)}>Beranda</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Keranjang ({cartCount})</Link>
          <Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link>
          
          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          ) : (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
