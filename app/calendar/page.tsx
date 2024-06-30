'use client';

import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { formatDate } from '@fullcalendar/core';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import AddEventModal from './components/addEventModal/AddEventModal';
import DeleteEventModal from './components/deleteEventModal/DeleteEventModal';
// Types
import type { Theme } from '@mui/material';
import type {
  EventInput,
  EventApi,
  EventContentArg,
  DateSelectArg,
  EventClickArg,
} from '@fullcalendar/core';

const initEvents: EventInput[] = [
  { title: 'meeting', start: new Date().toISOString().replace(/T.*$/, '') },
];

export default function Calendar() {
  const [events, setEvents] = useState<EventApi[]>([]);
  const [openDateModal, setOpenDateModal] = useState<boolean>(false);
  const [openEventModal, setOpenEventModal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(
    null
  );

  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <span className="fc-event-title">{eventInfo.event.title}</span>
      </>
    );
  };

  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setOpenDateModal(true);
  };

  const handleEventClick = (selected: EventClickArg) => {
    setSelectedEvent(selected);
    setOpenEventModal(true);
  };

  return (
    <Box>
      <PageHeading title="calendar" subtitle="full calendar interactive page" />
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
        gap={'15px'}
      >
        {/* CALENDAR MODALs */}
        <AddEventModal
          openDateModal={openDateModal}
          setOpenDateModal={setOpenDateModal}
          selectedDate={selectedDate}
        />

        <DeleteEventModal
          openEventModal={openEventModal}
          setOpenEventModal={setOpenEventModal}
          selectedEvent={selectedEvent}
        />

        {/* CALENDAR EVENTS */}
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

        {/* CALENDAR */}
        <Box
          flex={'1 1 100%'}
          sx={{
            '& .fc-popover': { backgroundColor: 'background.paper' },
            '& .fc-event-title': { textTransform: 'capitalize' },
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            eventColor={theme.palette.text.secondary}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            events={initEvents}
            eventsSet={(events) => setEvents(events)}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              omitZeroMinute: false,
              meridiem: 'short',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
