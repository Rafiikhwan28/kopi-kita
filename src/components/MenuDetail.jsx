import React from 'react';
import { useParams, Link } from 'react-router-dom';
import menuProducts from '../data/menuProduct';
import './MenuDetail.css';

const MenuDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const allProducts = [
    ...menuProducts.kopiLokal,
    ...menuProducts.bukuKopi,
    ...menuProducts.alatSeduh,
  ];
  const product = allProducts.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} ditambahkan ke keranjang.`);
  };

  if (!product) return <div style={{ padding: '2rem' }}>Produk tidak ditemukan.</div>;

  return (
    <div className="menu-detail-container">
      <img src={product.image} alt={product.name} className="menu-detail-image" />
      <div className="menu-detail-content">
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <h3 className="product-price">Harga: Rp {product.price.toLocaleString('id-ID')}</h3>
        <div className="menu-detail-actions">
          <button onClick={handleAddToCart} className="add-to-cart-btn">Tambah ke Keranjang</button>
          <Link to="/menu" className="menu-back-button">← Kembali ke Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
