import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { formatDate } from '@fullcalendar/core';
// Types
import type { EventApi } from '@fullcalendar/core';
interface CalendarSidebarProps {
  events: EventApi[];
}

export default function CalendarSidebar({ events }: CalendarSidebarProps) {
  return (
    <Paper
      sx={{
        flex: '1 1 20%',
        padding: '15px',
        textTransform: 'capitalize',
        borderRadius: '4px',
      }}
    >
      <Typography component={'h4'} variant="h5">
        events
      </Typography>
      <List>
        {events.map((event) => (
          <ListItem
            key={event.id}
            sx={{
              backgroundColor: 'secondary.main',
              my: '5px',
              borderRadius: '2px',
            }}
          >
            <ListItemText
              primary={event.title}
              secondary={formatDate(event.start!, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
