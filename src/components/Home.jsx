// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import products from '../data/products';
import './Home.css';
import Navbar from './Navbar/Navbar';

function Home({ cart, setCart }) {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    } else {
      alert('Produk sudah ada di keranjang!');
    }
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari produk kopi terbaik..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <main className="product-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>

            {/* Bungkus gambar dan nama dengan Link ke detail */}
            <Link to={`/product/${product.id}`} className="product-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>

            <p>Rp{product.price.toLocaleString()}</p>
            <button onClick={() => addToCart(product)}>
              + Tambah ke Keranjang
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
