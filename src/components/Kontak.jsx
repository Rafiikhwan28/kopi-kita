// src/pages/Kontak.jsx
import React from 'react';
import './Kontak.css';

const Kontak = () => {
  return (
    <div className="kontak-page">
      <h2>Kontak Kami</h2>
      <p>📍 Alamat: Jl. Kopi No. 123, Jakarta</p>
      <p>📞 Telepon: +62 812 3456 7890</p>
      <p>📧 Email: support@kopikita.id</p>

      <h3>Kirim Pesan</h3>
      <form className="kontak-form">
        <input type="text" placeholder="Nama Anda" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Pesan Anda" required></textarea>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};

export default Kontak;
