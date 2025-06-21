import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password) {
      const newUser = { email, password };
      localStorage.setItem('registeredUser', JSON.stringify(newUser));
      alert('Pendaftaran berhasil! Silakan login.');
      navigate('/login');
    } else {
      alert('Mohon isi email dan password dengan benar.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Daftar Akun KopiKita</h2>
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
        <button type="submit" className="register-btn">Daftar</button>
        <p>
          Sudah punya akun? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
