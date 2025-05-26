// src/components/Checkout.js
import React from 'react';
import './Checkout.css';

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p className="empty-msg">Keranjang kosong.</p>
      ) : (
        <div className="checkout-summary">
          <ul className="checkout-list">
            {cart.map((item, index) => (
              <li key={index}>{item.name} - Rp{item.price.toLocaleString()}</li>
            ))}
          </ul>
          <p><strong>Total: Rp{total.toLocaleString()}</strong></p>
          <button onClick={() => alert('Checkout berhasil!')}>Bayar Sekarang</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
