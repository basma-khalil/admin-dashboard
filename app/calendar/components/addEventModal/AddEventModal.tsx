import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// Type
import type { Dispatch, SetStateAction, FormEvent } from 'react';
interface AddEventModalProps {
  openDateModal: boolean;
  setOpenDateModal: Dispatch<SetStateAction<boolean>>;
  setDeleteEvent: Dispatch<SetStateAction<boolean>>;
}

export default function AddEventModal({
  openDateModal,
  setOpenDateModal,
  setDeleteEvent,
}: AddEventModalProps) {
  const handleCloseDateModal = () => {
    setOpenDateModal(false);
  };
  // const handleConfirmAddEvent = () => {
  //   setDeleteEvent(true);
  //   handleCloseDateModal();
  // };
  const handleCancelAddEvent = () => {
    // setDeleteEvent(false);
    handleCloseDateModal();
  };

  return (<Dialog
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
        const email = formJson.title;
        console.log(email);
        handleCloseDateModal();
      },
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
        please enter a title for your event
        </DialogContentText>
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
      </DialogContent>

    <DialogActions sx={{padding: '0 24px 16px 24px'}}>
      <Button type="submit" variant="contained" color="secondary">
        add
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleCancelAddEvent}>
        cancel
      </Button>
    </DialogActions>
  </Dialog>);
}
