'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { useTheme, useMediaQuery, type Theme, type CSSObject } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Components
import NavSection from './components/NavSection';
//Icons
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// Navigation data
import { home, data, pages, charts } from './data';

export default function Sidebar() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  const initIsOpen = isMobile ? false : true;
  const [isOpen, setIsOpen] = useState(initIsOpen);
  const theme = useTheme();
  const drawerWidth = 270;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 70,
  });

  return (
    <Box
      component={'aside'}
      sx={{
        gridArea: 'aside',
        width: drawerWidth,
        height: '100vh',
        ...(isOpen && {
          ...openedMixin(theme),
        }),
        ...(!isOpen && {
          ...closedMixin(theme),
        }),
      }}
    >
      <Drawer
        variant="permanent"
        open={isOpen}
        elevation={0}
        PaperProps={{
          sx: {
            flexShrink: 0,
            width: drawerWidth,
            py: '20px',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(isOpen && {
              ...openedMixin(theme),
              '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!isOpen && {
              ...closedMixin(theme),
              '& .MuiDrawer-paper': closedMixin(theme),
            }),
          },
        }}
      >
        {/* LOGO AND MENU ICON */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isOpen ? 'space-around' : 'flex-start',
            padding: theme.spacing(1),
          }}
        >
          {isOpen && (
            <Link
              component={NextLink}
              href={'/'}
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'text.primary',
              }}
            >
              <Image
                src={'/images/logo.png'}
                width={25}
                height={25}
                alt="Logo"
              />
              <Typography
                component={'span'}
                variant="h3"
                textTransform={'uppercase'}
              >
                admins
              </Typography>
            </Link>
          )}
          <IconButton
            aria-label="toggle menu"
            onClick={toggleDrawer}
            sx={{ marginLeft: isOpen ? 0 : '4px' }}
          >
            {isOpen ? <ChevronLeftIcon /> : <MenuOutlinedIcon />}
          </IconButton>
        </Box>

        {/* USER */}
        {isOpen && (
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            flexWrap={'wrap'}
            my={'25px'}
          >
            <Box
              component={'figure'}
              sx={{
                position: 'relative',
                width: 100,
                height: 100,
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <Image
                src={'/images/avatar.webp'}
                alt="User picture"
                fill={true}
                sizes="100px"
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Typography variant={'h2'} fontWeight={'bold'} align="center">
              basma khalil
            </Typography>
            <Typography
              paragraph
              variant="h5"
              align="center"
              color={'secondary.main'}
            >
              VP fancy admin
            </Typography>
          </Box>
        )}

        {/* NAVIGATION */}
        <Box component={'nav'} ml={isOpen ? '10%' : undefined}>
          <NavSection secList={home} isOpen={isOpen} />
          <NavSection secList={data} isOpen={isOpen} />
          <NavSection secList={pages} isOpen={isOpen} />
          <NavSection secList={charts} isOpen={isOpen} />
        </Box>
      </Drawer>
    </Box>
  );
}
