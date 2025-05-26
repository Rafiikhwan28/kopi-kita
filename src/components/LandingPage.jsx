import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="overlay">
        <div className="landing-content">
          <h1>Selamat Datang di <span>KopiKita</span></h1>
          <p>Rasakan cita rasa kopi terbaik dari nusantara. Nikmati pengalaman belanja kopi yang mudah dan menyenangkan.</p>
          <div className="landing-buttons">
            <Link to="/register" className="btn-register">Daftar Sekarang</Link>
            <Link to="/login" className="btn-login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
