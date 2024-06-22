'use client';

import { useState, useContext, type MouseEvent } from 'react';
import { ColorModeContext } from '@/app/theme/ColorModeContext';
import { useTheme } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
// Icons
import MoreIcon from '@mui/icons-material/MoreVert';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode = theme.palette.mode;

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleMode = () => {
    toggleColorMode();
    handleClose();
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
        <MenuItem onClick={handleToggleMode}>
          <IconButton aria-label="toggle theme">
            {mode === 'dark' ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          <p>{mode === 'dark' ? 'light' : 'dark'} theme</p>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <IconButton aria-label="show 4 new notifications">
            <Badge badgeContent={4} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
          <p>notifications</p>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <IconButton aria-label="show settings">
            <SettingsOutlinedIcon />
          </IconButton>
          <p>settings</p>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <IconButton
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
          >
            <PersonOutlinedIcon />
          </IconButton>
          <p>profile</p>
        </MenuItem>
      </Menu>
    </Box>
  );
}
