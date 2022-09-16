import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/api';
import {
  useAuthStateContext,
  useDispatchStateContext,
} from '../context/Authorization/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { blue, deepPurple } from '@mui/material/colors';

const pages = [
  { key: 'trips', label: 'Trips' },
  { key: 'expenses', label: 'Expenses' },
];
const settings = [
  { key: 'profile', label: 'Profile' },
  { key: 'account', label: 'Account' },
  { key: 'logout', label: 'Logout' },
];

const ResponsiveAppBar = () => {
  const state = useAuthStateContext();
  const dispatch = useDispatchStateContext();
  const [value] = useLocalStorage('token', {});
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (pageType) => {
    setAnchorElUser(null);
    handleClick(pageType);
  };

  const handleClick = (pageType) => {
    if (pageType === 'logout') {
      logoutUser(dispatch);
      navigate('/login');
    }
    return;
  };

  return (
    <AppBar position="static" style={{ background: '#26ADE0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AttachMoneyIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Expense Manager
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current userDetails"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {state.token &&
                state.userDetails &&
                pages.map((page) => (
                  <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                    <Link to={`\${page.key}`}></Link>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <AttachMoneyIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Expense Manager
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {state.token &&
              state.userDetails &&
              pages.map((page) => (
                <Button
                  component={Link}
                  to={`/${page.key}`}
                  key={page.key}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              ))}
          </Box>

          {state.token && state.userDetails && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: blue[500] }}>
                    {state?.userDetails?.name.split(' ')[0][0]}
                    {state?.userDetails?.name.split(' ')[1][0]}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.key}
                    onClick={() => handleCloseUserMenu(setting.key)}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
