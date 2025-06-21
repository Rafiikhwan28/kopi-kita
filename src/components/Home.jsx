import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import { Grid, Card, CardContent, CardMedia, Typography, Button, TextField, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
    <Container className="home-container" maxWidth="xl">
      <header className="home-header">
        <h1>Temukan Produk Kopi Terbaik</h1>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Cari produk kopi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ backgroundColor: '#fff', borderRadius: 1, maxWidth: '500px' }}
        />
      </header>

      <Grid container spacing={3} className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card className="product-card">
                <Link to={`/product/${product.id}`} className="product-link">
                  <CardMedia
                    component="img"
                    height="180"
                    image={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <CardContent className="product-content">
                    <Typography variant="h6" className="product-title">{product.name}</Typography>
                    <Typography variant="body2" className="product-price">Rp {product.price.toLocaleString()}</Typography>
                  </CardContent>
                </Link>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  fullWidth
                  onClick={() => addToCart(product)}
                  className="add-cart-button"
                >
                  Tambah ke Keranjang
                </Button>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 4, width: '100%' }}>
            Produk tidak ditemukan.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Home;
