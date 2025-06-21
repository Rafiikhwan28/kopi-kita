import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import './Home.css'; // Gunakan CSS yang sama untuk konsistensi

function Home({ cart, setCart }) {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
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
      <h2>Temukan Produk Kopi Terbaik</h2>

      <div style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
        <input
          type="text"
          placeholder="Cari produk kopi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Rp {product.price.toLocaleString()}</p>
              <div className="product-actions">
                <Link to={`/product/${product.id}`} className="detail-btn">
                  Detail
                </Link>
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  + Keranjang
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: '#999', fontSize: '1.1rem' }}>Produk tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
