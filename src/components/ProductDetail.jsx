// src/components/ProductDetail.js
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import products from '../data/products'; // Pastikan ini path benar
import './ProductDetail.css';

function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari produk berdasarkan id dari URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-container">
        <p>Produk tidak ditemukan.</p>
        <Link to="/home">Kembali ke Home</Link>
      </div>
    );
  }

  const addToCart = () => {
    setCart([...cart, product]);
    alert(`${product.name} berhasil ditambahkan ke keranjang!`);
  };

  return (
    <div className="product-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Kembali</button>
      <div className="product-detail-card">
        <img src={product.image} alt={product.name} />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="price">Rp{product.price.toLocaleString()}</p>
          <p className="description">{product.description || 'Deskripsi produk belum tersedia.'}</p>
          <button onClick={addToCart} className="add-to-cart-btn">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
