'use client';

import { useState, useMemo, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDesignTokens } from './theme';
// Types
import { type PaletteMode } from '@mui/material';

// Theme mode hook
const useMode = () => {
  // User's system preference mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  // Handle changing the user's preferred system mode
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return { theme, colorMode };
};

export default useMode;
