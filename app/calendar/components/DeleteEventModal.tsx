import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// Type
import type { Dispatch, SetStateAction } from 'react';
// Types
import type { EventClickArg } from '@fullcalendar/core';
interface DeleteEventModalProps {
  openEventModal: boolean;
  setOpenEventModal: Dispatch<SetStateAction<boolean>>;
  selectedEvent: EventClickArg | undefined;
}

export default function DeleteEventModal({
  openEventModal,
  setOpenEventModal,
  selectedEvent,
}: DeleteEventModalProps) {
  const handleCloseEventModal = () => {
    setOpenEventModal(false);
  };

  const handleConfirmDeleteEvent = () => {
    if (selectedEvent) {
      selectedEvent.event.remove();
    }
    handleCloseEventModal();
  };

  const handleCancelDeleteEvent = () => {
    handleCloseEventModal();
  };

  return (
    <Dialog
      open={openEventModal}
      onClose={handleCloseEventModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          minWidth: '350px',
          backgroundImage: 'none',
        },
      }}
    >
      <DialogTitle id="alert-dialog-title" sx={{ textTransform: 'capitalize' }}>
        confirm delete event
      </DialogTitle>

      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{
            color: 'text.primary',
            '&::first-letter': { textTransform: 'uppercase' },
          }}
        >
          {`are you sure you want to delete the event "${selectedEvent?.event.title}" ?`}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ padding: '0 24px 16px 24px' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleConfirmDeleteEvent}
        >
          delete
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleCancelDeleteEvent}
        >
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
