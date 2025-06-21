import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Ambil data user yang sudah terdaftar dari localStorage
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      localStorage.setItem('token', 'dummyToken12345'); // Simulasi token
      setIsLoggedIn(true);

      // Simpan data user untuk profile
      localStorage.setItem('user', JSON.stringify({
        name: email.split('@')[0], // Nama default dari email (sebelum @)
        email
      }));

      navigate('/home');
    } else {
      alert('Email atau password salah atau belum terdaftar!');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Masuk ke KopiKita</h2>
        <input
          type="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Masuk</button>
        <p>
          Belum punya akun? <Link to="/register">Daftar Sekarang</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
