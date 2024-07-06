'use client';

import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import AddEventModal from './components/AddEventModal';
import DeleteEventModal from './components/DeleteEventModal';
import CalendarSidebar from './components/CalendarSidebar';
// Types
import type {
  EventInput,
  EventApi,
  // EventContentArg,
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
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | undefined>(
    undefined
  );
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | undefined>(
    undefined
  );
  const theme = useTheme();

  // const renderEventContent = (eventInfo: EventContentArg) => {
  //   return (
  //     <>
  //       <b>{eventInfo.timeText}</b>
  //       <span className="fc-event-title">{eventInfo.event.title}</span>
  //     </>
  //   );
  // };

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
        flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
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
        <CalendarSidebar events={events} />

        {/* CALENDAR */}
        <Box
          flex={'1 1 100%'}
          sx={{
            '& .fc-popover': { backgroundColor: 'background.paper' },
            '& .fc-event-title': {
              // marginLeft: '3px',
              textTransform: 'capitalize',
            },
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
            // eventContent={renderEventContent}
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
