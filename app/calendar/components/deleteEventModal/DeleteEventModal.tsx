import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// Type
import type { Dispatch, SetStateAction } from 'react';
interface DeleteEventModalProps {
  openEventModal: boolean;
  setOpenEventModal: Dispatch<SetStateAction<boolean>>;
  setDeleteEvent: Dispatch<SetStateAction<boolean>>;
}

export default function DeleteEventModal({
  openEventModal,
  setOpenEventModal,
  setDeleteEvent,
}: DeleteEventModalProps) {
  const handleCloseEventModal = () => {
    setOpenEventModal(false);
  };
  const handleConfirmDeleteEvent = () => {
    setDeleteEvent(true);
    handleCloseEventModal();
  };
  const handleCancelDeleteEvent = () => {
    setDeleteEvent(false);
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
          backgroundImage: 'none',
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{textTransform: 'capitalize' }}
      >
        delete event ?
      </DialogTitle>

      <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{color: 'text.primary', '&::first-letter': { textTransform: 'uppercase' } }}>
          are you sure you want to delete this event
          </DialogContentText>
        </DialogContent>

      <DialogActions sx={{padding: '0 24px 16px 24px'}}>
        <Button variant="contained" color="secondary" onClick={handleConfirmDeleteEvent}>
          delete
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancelDeleteEvent}>
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
