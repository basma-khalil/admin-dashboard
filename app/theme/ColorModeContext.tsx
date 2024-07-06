'use client';

import { createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useMode from './useMode';

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function ColorModeContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
