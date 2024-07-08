import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
// Icons
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box display={'flex'} bgcolor={'primary.light'} borderRadius="3px">
      <InputBase
        sx={{ flex: 1, ml: 2 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" aria-label='search' sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
