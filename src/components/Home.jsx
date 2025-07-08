import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import './Home.css';

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
    <div className="home-page">
      
      {/* SECTION BANNER */}
      <section className="banner-section">
        <div className="banner-content">
          <h1>KopiKita</h1>
          <p>Temukan berbagai pilihan kopi terbaik, langsung dari petani lokal untuk Anda.</p>
          <input
            type="text"
            placeholder="Cari produk kopi terbaik..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="banner-search"
          />
        </div>
      </section>

      {/* SECTION PRODUK */}
      <section className="product-section">
        <h2 className="section-title">Rekomendasi Produk</h2>
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
                  <button className="add-cart-btn" onClick={() => addToCart(product)}>
                    + Keranjang
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-msg">Produk tidak ditemukan.</p>
          )}
        </div>
      </section>

    </div>
  );
}

export default Home;
