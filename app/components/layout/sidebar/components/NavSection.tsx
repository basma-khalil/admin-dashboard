'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme, keyframes } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Types
import type { NavSectionProps } from '../types';

export default function NavSection({ secList, isOpen }: NavSectionProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const swing = keyframes`
    0%, 30%, 50%, 70%, 100% {transform: rotate(0deg)}
    10% {transform: rotate(10deg)}
    40% {transform: rotate(-10deg)}
    60% {transform: rotate(5deg)}
    80% {transform: rotate(-5deg)}
  `;

  return (
    <Box component={secList.title ? 'section' : 'div'}>
      {/* HEADING */}
      {secList.title && (
        <Typography
          component={'h3'}
          variant="h6"
          color={theme.custom.neutral.main}
          sx={{
            m: isOpen ? '15px 0 5px 20px' : '15px 0 5px',
            textAlign: isOpen ? 'start' : 'center',
          }}
        >
          {secList.title}
        </Typography>
      )}

      {/* MENU */}
      <List>
        {secList.items.map((item) => (
          // MENU ITEM
          <ListItem key={item.text}>
            <ListItemButton
              component={Link}
              href={item.path}
              selected={pathname === item.path}
              sx={{
                padding: 0,
                transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                '& svg': {
                  color: 'text.primary',
                },
                ':hover, &.Mui-selected, &.Mui-selected:hover': {
                  color: 'text.secondary',
                  backgroundColor: 'transparent',
                  '& svg': {
                    color: 'text.secondary',
                    animation: `${swing} ease-in-out 0.5s 1 alternate`,
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  justifyContent: isOpen ? 'center' : 'flex-start',
                  marginLeft: isOpen ? undefined : '4px',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
