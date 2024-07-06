import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function NotFound() {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      mt={5}
      textTransform={'capitalize'}
    >
      <Typography component={'h1'} variant="h2" fontWeight={'bold'} m={2}>
        not found
      </Typography>
      <Typography
        paragraph
        color={'secondary.main'}
        sx={{
          textTransform: 'lowercase',
          '&::first-letter': { textTransform: 'uppercase' },
        }}
      >
        could not find requested resource
      </Typography>
      <Link
        component={NextLink}
        href="/"
        underline="hover"
        sx={{
          color: 'text.primary',
          transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          '&:hover': { color: 'text.secondary' },
        }}
      >
        return home
      </Link>
    </Box>
  );
}
