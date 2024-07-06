'use client';

import { useContext } from 'react';
import { ColorModeContext } from '../../../../theme/ColorModeContext';
import { useTheme, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// Icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// Types
import type { Theme } from '@mui/material';

export default function Mode() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode = theme.palette.mode;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Button
      aria-label="toggle theme"
      onClick={toggleColorMode}
      sx={{
        minWidth: 0,
        padding: 0,
        color: 'text.primary',
        borderRadius: isMobile ? undefined : '50%',
      }}
    >
      <IconButton component="span">
        {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
      {isMobile && <p>{mode === 'dark' ? 'light' : 'dark'} theme</p>}
    </Button>
  );
}
