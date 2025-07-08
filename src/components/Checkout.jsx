import React, { useState } from 'react';
import './Checkout.css';

function Checkout({ cart }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generateWhatsAppMessage = () => {
    let message = `Halo, saya ingin melakukan pemesanan:\n\n`;

    cart.forEach((item) => {
      message += `✅ ${item.name}\nHarga: Rp${item.price.toLocaleString()} x ${item.quantity} = Rp${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `📦 *Total Pembayaran: Rp${total.toLocaleString()}*\n\n`;
    message += `💳 Metode Pembayaran: ${paymentMethod}\n`;
    message += `👤 Nama: ${name}\n`;
    message += `📍 Alamat: ${address}\n`;

    return encodeURIComponent(message);
  };

  const handleCheckoutWhatsApp = () => {
    if (!paymentMethod || !name || !address) {
      alert('Mohon lengkapi semua data dan pilih metode pembayaran.');
      return;
    }

    const phoneNumber = '6287835759531'; // Ganti sesuai nomor admin
    const url = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">Keranjang kosong.</p>
      ) : (
        <div className="checkout-summary">
          <div className="checkout-product-list">
            {cart.map((item, index) => (
              <div key={index} className="checkout-product-card">
                <img src={item.image} alt={item.name} className="checkout-product-img" />
                <div className="checkout-product-info">
                  <h4>{item.name}</h4>
                  <p>Harga: Rp{item.price.toLocaleString()}</p>
                  <p>Jumlah: {item.quantity}</p>
                  <p><strong>Subtotal: Rp{(item.price * item.quantity).toLocaleString()}</strong></p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="checkout-total">Total: Rp{total.toLocaleString()}</h3>

          <div className="checkout-form">
            <label>Metode Pembayaran:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
              <option value="">-- Pilih Metode --</option>
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="E-Wallet">E-Wallet (OVO, DANA, GoPay)</option>
              <option value="COD">COD (Bayar di Tempat)</option>
            </select>

            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="Alamat Lengkap"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>

            <button onClick={handleCheckoutWhatsApp} className="checkout-btn">
              Bayar via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
