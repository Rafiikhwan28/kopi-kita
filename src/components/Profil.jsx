import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, Avatar, Button, Box, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [tempUser, setTempUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch {
        setUser({ name: '', email: '' });
      }
    }
  }, []);

  const handleEdit = () => {
    setTempUser(user);
    setEditMode(true);
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(tempUser));
    setUser(tempUser);
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card sx={{ p: 3, textAlign: 'center', boxShadow: 4, borderRadius: 3 }}>
        <Avatar
          sx={{ width: 90, height: 90, margin: '0 auto', bgcolor: '#442c2e' }}
        >
          <AccountCircleIcon fontSize="large" />
        </Avatar>

        <CardContent>
          {editMode ? (
            <>
              <TextField
                label="Nama Lengkap"
                value={tempUser.name}
                onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                type="email"
                value={tempUser.email}
                onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                fullWidth
                margin="normal"
              />
            </>
          ) : (
            <>
              <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold', color: '#442c2e' }}>
                {user.name || '-'}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {user.email || '-'}
              </Typography>
            </>
          )}

          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mt={2}>
            {editMode ? (
              <Button
                variant="contained"
                color="success"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Simpan
              </Button>
            ) : (
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit Profil
              </Button>
            )}
            <Button
              variant="contained"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
