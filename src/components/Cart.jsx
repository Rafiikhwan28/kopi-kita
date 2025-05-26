// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p className="empty-msg">Keranjang kosong.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>Rp{item.price.toLocaleString()}</span>
                <button onClick={() => removeFromCart(index)}>Hapus</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p><strong>Total: Rp{total.toLocaleString()}</strong></p>
            <Link to="/checkout"><button className="checkout-btn">Lanjut ke Checkout</button></Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
