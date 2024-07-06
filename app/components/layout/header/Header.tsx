import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
// Components
import SearchBar from './components/SearchBar';
import Mode from './components/Mode';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Profile from './components/Profile';
import MobileMenu from './components/MobileMenu';

export default function Header() {
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
          <Mode />
          <Notifications />
          <Settings />
          <Profile />
        </Box>

        {/* MOBILE MENU */}
        <MobileMenu />
      </Toolbar>
    </AppBar>
  );
}
