import { LocalizationProvider, DateTimePicker, renderTimeViewClock } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Box, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// Type
import type { Dispatch, SetStateAction, FormEvent } from 'react';
// Types
import type {
  EventInput,
  EventApi,
  DateSelectArg,
  EventClickArg,
} from '@fullcalendar/core';
interface AddEventModalProps {
  openDateModal: boolean;
  setOpenDateModal: Dispatch<SetStateAction<boolean>>;
  selectedDate: DateSelectArg | null;
}

export default function AddEventModal({
  openDateModal,
  setOpenDateModal,
  selectedDate,
}: AddEventModalProps) {
  const handleCloseDateModal = () => {
    setOpenDateModal(false);
  };

  const handleConfirmAddEvent = (title: string, start: string) => {
    if (selectedDate) {
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();

      if (title) {
        calendarApi.addEvent({
          id: `${new Date().toISOString()}-${title}`,
          title,
          start: start,
          end: selectedDate.endStr,
          allDay: selectedDate.allDay,
        });
        console.log(selectedDate);
        console.log(start);
      }
    }
  };

  const handleCancelAddEvent = () => {
    handleCloseDateModal();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={openDateModal}
        onClose={handleCloseDateModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          component: 'form',
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const title = formJson.title;
            const start = formJson.start;
            handleConfirmAddEvent(title, start);
            handleCloseDateModal();
          },
          style: {
            minWidth: '350px',
            backgroundImage: 'none',
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ textTransform: 'capitalize' }}
        >
          add a new event
        </DialogTitle>

        <DialogContent
          sx={{
            '& .MuiInputLabel-shrink:not(& .Mui-error)': {
              color: 'text.secondary',
            },
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              color: 'text.primary',
              '&::first-letter': { textTransform: 'uppercase' },
            }}
          >
            please enter a title for your event
          </DialogContentText>
          <Box display={'flex'} flexWrap={'wrap'} gap={'20px'}>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Event Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <DateTimePicker
            name="start"
            label="Event Start"
            format=''
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
          </Box>
        </DialogContent>

        <DialogActions sx={{ padding: '0 24px 16px 24px' }}>
          <Button type="submit" variant="contained" color="secondary">
            add
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancelAddEvent}
          >
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}
