'use client';

import { useEffect } from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        something went wrong!
      </Typography>
      <Typography
        paragraph
        color={'secondary.main'}
        sx={{
          textTransform: 'lowercase',
          '&::first-letter': { textTransform: 'uppercase' },
        }}
      >
        {error.message}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Button
          variant="text"
          onClick={() => reset()}
          sx={{
            padding: 0,
            color: 'text.primary',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            lineHeight: 'inherit',
            textTransform: 'capitalize',
            '&:hover': { color: 'text.secondary', textDecoration: 'underline' },
          }}
        >
          try again
        </Button>
        <Typography>or</Typography>
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
    </Box>
  );
}
