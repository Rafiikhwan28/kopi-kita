import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // ← Tambahkan ini

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('Pendaftaran berhasil!');
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleRegister}>
        <h2>Daftar</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Daftar</button>
        <p>Sudah punya akun? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
