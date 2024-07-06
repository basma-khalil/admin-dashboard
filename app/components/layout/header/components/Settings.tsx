'use client';

import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// Icons
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// Types
import type { Theme } from '@mui/material';

export default function Settings() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Button
      aria-label="show settings"
      sx={{
        minWidth: 0,
        padding: 0,
        color: 'text.primary',
        borderRadius: isMobile ? undefined : '50%',
      }}
    >
      <IconButton component="span">
        <SettingsOutlinedIcon />
      </IconButton>
      {isMobile && <p>settings</p>}
    </Button>
  );
}
