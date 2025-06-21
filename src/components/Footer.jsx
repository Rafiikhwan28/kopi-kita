// src/components/Footer.jsx
import React from 'react';
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CoffeeIcon from '@mui/icons-material/Coffee';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-brand" gutterBottom>
              <CoffeeIcon fontSize="small" /> KopiKita
            </Typography>
            <Typography variant="body2" color="textSecondary">
              © 2025 KopiKita. All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Menu</Typography>
            <Link href="/menu" underline="hover" color="inherit">Menu</Link><br />
            <Link href="/kontak" underline="hover" color="inherit">Kontak</Link><br />
            <Link href="/home" underline="hover" color="inherit">Beranda</Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Ikuti Kami</Typography>
            <IconButton href="https://instagram.com/" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://facebook.com/" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com/" target="_blank" color="inherit">
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
