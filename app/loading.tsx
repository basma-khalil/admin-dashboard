import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'75vh'}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}
