import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      localStorage.setItem('token', 'dummyToken12345'); // Simulasi token
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Email atau password salah atau belum terdaftar!');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Masuk</button>
        <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
      </form>
    </div>
  );
}

export default Login;
