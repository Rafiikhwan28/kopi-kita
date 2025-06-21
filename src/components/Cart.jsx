import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, setCart }) {
  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Keranjang Belanja</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">Keranjang kosong.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Harga: Rp {item.price.toLocaleString()}</p>
                  <p>Jumlah: {item.quantity}</p>
                  <p><strong>Subtotal: Rp {(item.price * item.quantity).toLocaleString()}</strong></p>

                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)} className="quantity-btn">-</button>
                    <span className="quantity-count">{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)} className="quantity-btn">+</button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Hapus</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p><strong>Total Belanja: Rp {total.toLocaleString()}</strong></p>
            <Link to="/checkout">
              <button className="checkout-btn">Lanjut ke Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
