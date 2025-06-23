import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail';
import Menu from './components/Menu';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import MenuDetail from './components/MenuDetail';
import Profile from './components/Profil';

import './App.css';

function AppWrapper() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Cek token di localStorage saat pertama kali component dimuat
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const hideNavbarRoutes = ['/', '/login', '/register'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && (
        <Navbar
          cartCount={cart.length}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
        <Route path="/menu/:id" element={<MenuDetail cart={cart} setCart={setCart} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
