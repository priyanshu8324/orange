import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const navigationItems = [
    { text: 'Home', to: '/' },
    { text: 'Contact', to: '/contact' },
    { text: 'ToDoList', to: '/todolist' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SIET
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Contact</Button>
          </Link>
          <Link to="/todolist" style={{ textDecoration: 'none' }}>
            <Button color="inherit">ToDoList</Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Drawer hai ye okok */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {navigationItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.to}
              onClick={toggleDrawer(false)}
            >
              {item.text}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navigation;
