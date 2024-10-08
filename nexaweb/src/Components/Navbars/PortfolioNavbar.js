// src/AnimatedPortfolioNavbar.js
import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from "@mui/icons-material/Menu";
import { alpha } from '@mui/material/styles'; // Use alpha for color manipulation

// Custom styled components for animation
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create(['background-color', 'box-shadow'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: theme.transitions.create(['transform'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: alpha(theme.palette.primary.main, 0.2), // Use alpha for hover effect
  },
}));

const PortfolioNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Mobile view
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250, backgroundColor: '#333', height: '100vh', color: 'white' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div id="home">
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="fixed" color="transparent">
          <StyledToolbar>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="/Images/logo.png" height={80} width={80} alt="Logo" />
            </Typography>
            {!isMobile && (
              <>
                <AnimatedButton className="animated-text" href="/" color="inherit">
                  Home
                </AnimatedButton>
                <AnimatedButton className="animated-text" href="/" color="inherit">
                  About
                </AnimatedButton>
                <AnimatedButton className="animated-text" href="/" color="inherit">
                  Services
                </AnimatedButton>
                <AnimatedButton className="animated-text" href="/portfolio" color="inherit">
                  Portfolio
                </AnimatedButton>
                <AnimatedButton className="animated-text" href="/" color="inherit">
                  Contact
                </AnimatedButton>
              </>
            )}
          </StyledToolbar>
        </StyledAppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Box>
    </div>
  );
};

export default PortfolioNavbar;
