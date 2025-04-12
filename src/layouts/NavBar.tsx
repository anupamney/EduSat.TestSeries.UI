import { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Typography, Container } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { removeAuthToken, removeRefreshToken } from '../service/dataService';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './NavBar.css';
import logo from '../assets/logo.jpg';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    removeAuthToken();
    removeRefreshToken();
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <AppBar position="fixed" className="navbar" sx={{ boxShadow: 2 }}>
      <Container maxWidth={false} sx={{ height: '100%', px: { xs: 1, md: 2 } }}>
        <Toolbar disableGutters className="navbar-container" sx={{ minHeight: '64px !important', p: 0 }}>
          <Link to="/schools" className="navbar-header" onClick={closeMobileMenu}>
            <img src={logo} alt="Edusat Logo" className="navbar-logo" />
            <Typography className="navbar-title" variant="h6" component="div" noWrap>
              EDUSAT TEST SERIES
            </Typography>
          </Link>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleClick}
              color="inherit"
              className="mobile-menu-btn"
              edge="end"
            >
              {click ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <Box
            component="nav"
            className={click ? 'nav-menu active' : 'nav-menu'}
            sx={{ 
              display: { xs: click ? 'flex' : 'none', md: 'flex' },
              height: '100%'
            }}
          >
            <Link
              to="/add-school"
              className={`nav-links ${isActive('/add-school')}`}
              onClick={closeMobileMenu}
            >
              ADD SCHOOL
            </Link>
            <Link
              to="/add-teachers"
              className={`nav-links ${isActive('/add-teachers')}`}
              onClick={closeMobileMenu}
            >
              ADD TEACHER
            </Link>
            <Link
              to="/schools"
              className={`nav-links ${isActive('/schools')}`}
              onClick={closeMobileMenu}
            >
              SCHOOL LIST
            </Link>
            <Link
              to="/add-scholarship"
              className={`nav-links ${isActive('/add-scholarship')}`}
              onClick={closeMobileMenu}
            >
              ADD SCHOLARSHIP
            </Link>
            <Link
              to="/my-profile"
              className={`nav-links ${isActive('/my-profile')}`}
              onClick={closeMobileMenu}
            >
              MY PROFILE
            </Link>
            
            <Button
              onClick={handleLogout}
              className="nav-links"
              sx={{
                height: '36px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '8px 14px',
                borderRadius: '4px',
                transition: 'all 0.2s ease-in-out',
                letterSpacing: '0.5px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 0.15)',
                  color: '#ff5555',
                },
              }}
            >
              LOGOUT
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
