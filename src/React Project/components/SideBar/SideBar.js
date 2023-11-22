import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleToggle}
        sx={{ mr: 2 }}
      >
        <DehazeIcon />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={handleClose}>
        <List>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Queries" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Service" />
          </ListItem>
          <ListItem button onClick={handleClose}>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
