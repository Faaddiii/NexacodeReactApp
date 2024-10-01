import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ButtonUsage from "../Button/ButtonUsage";

export default function Navbar() {
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Services', 'Contact'].map((text) => (
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
        <AppBar
          position="fixed"  // Change to fixed for sticky navbar
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Optional: Adds a background color
            boxShadow: 'none',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,  // Ensure it stays on top of other content
          }}
        >
          <Toolbar>
            {isMobile && (
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
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="Images/logo.png" height={80} width={80} alt="Logo" />
            </Typography>
            {!isMobile && (
              <>
                <Button className="animated-text" href="#home" color="inherit">Home</Button>
                <Button className="animated-text" href="#about" color="inherit">About</Button>
                <Button className="animated-text" href="#services" color="inherit">Services</Button>
                <Button className="animated-text" href="#contact" color="inherit">Contact</Button>
              </>
            )}
            {/* <ButtonUsage></ButtonUsage> */}
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Box>
    </div>
  );
}
