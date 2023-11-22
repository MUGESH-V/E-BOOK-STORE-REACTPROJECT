import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, Hidden, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const NavBar = () => {
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoginClick = () => {
    setLoginFormOpen(true);
  };

  const handleRegistrationClick = () => {
    setRegistrationFormOpen(true);
  };

  const handleClose = () => {
    setLoginFormOpen(false);
    setRegistrationFormOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
        console.log('Search Query:', searchQuery);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 123, 255, 0.9)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar>
          <SideBar />
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
            NowEbook
          </Typography>
          <Hidden smDown>
            <Button color="inherit" component={Link} to="/" className="button-text">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" className="button-text">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact" className="button-text">
              Contact
            </Button>
          </Hidden>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              type="text"
              placeholder="Search"
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ marginRight: '10px', backgroundColor: '#fff', borderRadius: '5px', width: '200px' }}
            />
            <Button type="submit" color="inherit" style={{ backgroundColor: '#ffcc00', color: '#fff' }}>
              Search
            </Button>
          </form>
          <Button color="inherit" onClick={handleLoginClick} className="button-text">
            Login
          </Button>
          <Button color="inherit" onClick={handleRegistrationClick} className="button-text">
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={isLoginFormOpen} onClose={handleClose}>
        <LoginForm onClose={handleClose} />
      </Dialog>
      <Dialog open={isRegistrationFormOpen} onClose={handleClose}>
        <RegistrationForm onClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default NavBar;
