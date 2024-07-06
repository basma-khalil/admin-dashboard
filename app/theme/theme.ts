'use client';

import { Roboto } from 'next/font/google';
// Types
import { type PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      neutral: {
        dark: string;
        main: string;
        light: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      neutral?: {
        dark?: string;
        main?: string;
        light?: string;
      };
    };
  }
}

// Default font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Design color palette
export const palette = (mode: PaletteMode) => ({
  ...(mode === 'dark'
    ? {
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509',
        },
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        green: {
          100: '#dbf5ee',
          200: '#b7ebde',
          300: '#94e2cd',
          400: '#70d8bd',
          500: '#4cceac',
          600: '#3da58a',
          700: '#2e7c67',
          800: '#1e5245',
          900: '#0f2922',
        },
        blue: {
          100: '#e1e2fe',
          200: '#c3c6fd',
          300: '#a4a9fc',
          400: '#868dfb',
          500: '#6870fa',
          600: '#535ac8',
          700: '#3e4396',
          800: '#2a2d64',
          900: '#151632',
        },
        red: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f',
        },
      }
    : {
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0', // manually changed
          500: '#141b2d',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5',
        },
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        green: {
          100: '#0f2922',
          200: '#1e5245',
          300: '#2e7c67',
          400: '#3da58a',
          500: '#4cceac',
          600: '#70d8bd',
          700: '#94e2cd',
          800: '#b7ebde',
          900: '#dbf5ee',
        },
        blue: {
          100: '#151632',
          200: '#2a2d64',
          300: '#3e4396',
          400: '#535ac8',
          500: '#6870fa',
          600: '#868dfb',
          700: '#a4a9fc',
          800: '#c3c6fd',
          900: '#e1e2fe',
        },
        red: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb',
        },
      }),
});

// MUI custom theme object with the custom values
export const getDesignTokens = (mode: PaletteMode) => {
  const color = palette(mode);
  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            // Palette values for dark mode
            primary: {
              main: color.primary[500],
              light: color.primary[400],
            },
            secondary: {
              main: color.green[500],
            },
            neutral: {
              dark: color.grey[700],
              main: color.grey[500],
              light: color.grey[100],
            },
            text: {
              primary: color.grey[100],
              secondary: color.blue[500],
            },
            background: {
              default: color.primary[500],
              paper: color.primary[400],
            },
          }
        : {
            // Palette values for light mode
            primary: {
              main: color.primary[100],
              light: color.primary[400],
            },
            secondary: {
              main: color.green[500],
              light: color.green[300],
            },
            text: {
              primary: color.grey[100],
              secondary: color.blue[500],
            },
            background: {
              default: '#fcfcfc',
              paper: color.primary[400],
            },
          }),
    },
    custom: {
      neutral: {
        dark: color.grey[700],
        main: color.grey[300],
        light: color.grey[100],
      },
    },
    typography: {
      fontFamily: `${roboto.style.fontFamily}, sans-serif`,
      fontSize: 12,
      h1: {
        fontSize: 38,
      },
      h2: {
        fontSize: 30,
      },
      h3: {
        fontSize: 22,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            ...(mode === 'dark'
              ? {
                  // AppBar styles for dark mode
                  backgroundColor: color.primary[500],
                }
              : {
                  // AppBar styles for light mode
                  backgroundColor: '#fcfcfc',
                }),
          },
        },
      },
    },
  };
};
