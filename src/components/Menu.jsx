import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuProducts from '../data/menuProduct';
import './Menu.css';

const Menu = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('kopiLokal');

  const categories = {
    kopiLokal: 'Produk Kopi Lokal',
    bukuKopi: 'Buku Kopi',
    alatSeduh: 'Alat Seduh Kopi'
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name && item.price === product.price);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="menu-page">
      <h2>Menu Produk KopiKita</h2>

      <div className="category-buttons">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {menuProducts[selectedCategory].map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.desc.slice(0, 60)}...</p>
              <p className="product-price">Rp {item.price.toLocaleString('id-ID')}</p>
            </div>
            <div className="product-actions">
              <Link to={`/menu/${item.id}`} className="detail-btn">
                Detail
              </Link>
              <button onClick={() => addToCart(item)} className="add-cart-btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
