import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText, Badge, Menu, MenuItem, Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CoffeeIcon from '@mui/icons-material/Coffee';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css';

const Navbar = ({ cartCount, isLoggedIn, setIsLoggedIn }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleProfileMenuClose();
    setDrawerOpen(false);
    navigate('/login');
  };

  return (
    <>
      <AppBar position="sticky" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            className="navbar-logo"
          >
            <CoffeeIcon style={{ marginRight: 5 }} /> KopiKita
          </Typography>

          <div className="navbar-desktop-menu">
            <Button color="inherit" component={Link} to="/home">Beranda</Button>
            <Button color="inherit" component={Link} to="/menu">Menu</Button>
            <Button color="inherit" component={Link} to="/kontak">Kontak</Button>

            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {isLoggedIn ? (
              <>
                <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: '#ffe0b2', color: '#442c2e' }}>
                    <AccountCircleIcon />
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={profileMenuAnchor}
                  open={Boolean(profileMenuAnchor)}
                  onClose={handleProfileMenuClose}
                >
                  <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>Profil</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
              </>
            )}
          </div>

          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer untuk mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List className="navbar-drawer">
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/home" onClick={toggleDrawer(false)}>
              <ListItemText primary="Beranda" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/menu" onClick={toggleDrawer(false)}>
              <ListItemText primary="Menu" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/kontak" onClick={toggleDrawer(false)}>
              <ListItemText primary="Kontak" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/cart" onClick={toggleDrawer(false)}>
              <ListItemText primary={`Keranjang (${cartCount})`} />
            </ListItemButton>
          </ListItem>

          {isLoggedIn ? (
            <>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/profile" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Profil" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/login" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/register" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
