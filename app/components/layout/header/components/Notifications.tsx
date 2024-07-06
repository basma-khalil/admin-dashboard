'use client';

import { useState, type MouseEvent } from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// Icons
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// Types
import type { Theme } from '@mui/material';
type Notifications = {
  title: string;
  date: string;
}[];

const notificationDate = (dayBefore: number) =>
  new Date(Date.now() - dayBefore * 24 * 60 * 60 * 1000)
    .toISOString()
    .replace(/T.*$/, '');
const initNotifications: Notifications = [
  {
    title: 'first notification',
    date: notificationDate(0),
  },
  {
    title: 'second notification',
    date: notificationDate(1),
  },
  {
    title: 'third notification',
    date: notificationDate(2),
  },
  {
    title: 'fourth notification',
    date: notificationDate(3),
  },
];

export default function Notifications() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [beenRead, setBeenRead] = useState(false);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setBeenRead(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="notifications-button"
        aria-label={`show ${initNotifications.length} new notifications`}
        aria-controls={open ? 'notifications-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
        sx={{
          minWidth: 0,
          padding: 0,
          color: 'text.primary',
          borderRadius: isMobile ? undefined : '50%',
        }}
      >
        <IconButton component="span">
          <Badge
            badgeContent={beenRead ? 0 : initNotifications.length}
            color="error"
          >
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        {isMobile && <p>notifications</p>}
      </Button>

      <Menu
        id="notifications-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'notifications-button',
        }}
      >
        {initNotifications.map((notification, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              textTransform: 'capitalize',
              '& p': {
                margin: 0,
                fontWeight: 'medium',
              },
              '& span': {
                opacity: 0.7,
              },
            }}
          >
            <p>{notification.title}</p>
            <span>{notification.date}</span>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
