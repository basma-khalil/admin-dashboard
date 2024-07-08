import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ColorModeContextProvider from './theme/ColorModeContext';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './globals.css';
// Components
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Next.js Admin Dashboard App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ColorModeContextProvider>
            <CssBaseline />
            <Box
              sx={{
                display: 'grid',
                gridTemplateAreas: `"aside header"
            "aside main"`,
                gridTemplateColumns: 'auto 1fr',
                gridTemplateRows: 'auto 1fr',
              }}
            >
              <Header />
              <Sidebar />
              <Box
                component={'main'}
                gridArea={'main'}
                width={'100%'}
                p={{ xs: 2, sm: 3 }}
              >
                {children}
              </Box>
            </Box>
          </ColorModeContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
