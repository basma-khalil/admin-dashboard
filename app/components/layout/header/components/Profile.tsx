'use client';

import { useState, type MouseEvent } from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Icons
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Logout from '@mui/icons-material/Logout';
// Types
import type { Theme } from '@mui/material';
type ProfileListItems = {
  text: string;
  icon: JSX.Element;
}[];

const profileListItems: ProfileListItems = [
  { text: 'my account', icon: <PersonOutlinedIcon /> },
  { text: 'log out', icon: <Logout /> },
];

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="profile-button"
        aria-label="account of current user"
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
        sx={{
          minWidth: 0,
          padding: 0,
          color: 'text.primary',
          borderRadius: isMobile ? undefined : '50%',
        }}
      >
        <IconButton component="span">
          <PersonOutlinedIcon />
        </IconButton>
        {isMobile && <p>profile</p>}
      </Button>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'profile-button',
        }}
      >
        {profileListItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
