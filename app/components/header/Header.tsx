'use client';

import { useContext } from 'react';
import { ColorModeContext } from '../../theme/ColorModeContext';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
// Components
import SearchBar from './components/SearchBar';
import MobileMenu from './components/MobileMenu';
// Icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

export default function Header() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        gridArea: 'header',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* SEARCH BAR */}
        <SearchBar />

        {/* ICONS */}
        <Box display={{ xs: 'none', md: 'flex' }}>
          <IconButton onClick={toggleColorMode} aria-label="toggle theme">
            {mode === 'dark' ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>

          <IconButton aria-label="show 4 new notifications">
            <Badge badgeContent={4} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="show settings">
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
          >
            <PersonOutlinedIcon />
          </IconButton>
        </Box>

        {/* MOBILE MENU */}
        <MobileMenu />
      </Toolbar>
    </AppBar>
  );
}
