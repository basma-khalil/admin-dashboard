'use client';

import { useState, type MouseEvent } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// Components
import Mode from './Mode';
import Notifications from './Notifications';
import Settings from './Settings';
import Profile from './Profile';
// Icons
import MoreIcon from '@mui/icons-material/MoreVert';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display={{ xs: 'flex', md: 'none' }}>
      <IconButton
        id="mobile-menu-button"
        aria-label="show more"
        aria-controls={'mobile-menu'}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleOpen}
      >
        <MoreIcon />
      </IconButton>

      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        sx={{ textTransform: 'capitalize' }}
        MenuListProps={{
          'aria-labelledby': 'mobile-menu-button',
        }}
      >
        <MenuItem>
          <Mode />
        </MenuItem>

        <MenuItem>
          <Notifications />
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Settings />
        </MenuItem>

        <MenuItem>
          <Profile />
        </MenuItem>
      </Menu>
    </Box>
  );
}
