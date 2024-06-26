'use client';

import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { formatDate } from '@fullcalendar/core';
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
  const [openEventModal, setOpenEventModal] = useState<boolean>(false);
  const [deleteEvent, setDeleteEvent] = useState<boolean>(false);
  const [openDateModal, setOpenDateModal] = useState<boolean>(false);

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${new Date().toISOString()}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    setOpenEventModal(true);
    if (deleteEvent) {
      selected.event.remove();
    }
    setDeleteEvent(false);
  };

  return (
    <Box>
      <PageHeading title="calendar" subtitle="full calendar interactive page" />
      <Box display={'flex'} justifyContent={'space-between'} gap={'15px'}>
        {/* CALENDAR MODALs */}
        <AddEventModal
          openDateModal={openDateModal}
          setOpenDateModal={setOpenDateModal}
          setDeleteEvent={setDeleteEvent}
        />

        <DeleteEventModal
          openEventModal={openEventModal}
          setOpenEventModal={setOpenEventModal}
          setDeleteEvent={setDeleteEvent}
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
        <Box flex={'1 1 100%'}>
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
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            events={initEvents}
            eventsSet={(events) => setEvents(events)}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
          />
        </Box>
      </Box>
    </Box>
  );
}
