'use client';

import { useState } from 'react';
import {
  LocalizationProvider,
  DateTimePicker,
  renderTimeViewClock,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useMediaQuery } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// Utils
import { palette } from '../../theme/theme';
// Types
import type { Dispatch, SetStateAction, FormEvent } from 'react';
import type { Theme } from '@mui/material';
import type { EventInput, DateSelectArg } from '@fullcalendar/core';
interface AddEventModalProps {
  openDateModal: boolean;
  setOpenDateModal: Dispatch<SetStateAction<boolean>>;
  selectedDate: DateSelectArg | undefined;
}

export default function AddEventModal({
  openDateModal,
  setOpenDateModal,
  selectedDate,
}: AddEventModalProps) {
  const [error, setError] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  const bgColors = [
    { title: 'default', color: palette('dark').blue[500] },
    { title: 'green', color: palette('dark').green[500] },
    { title: 'red', color: palette('dark').red[400] },
    { title: 'grey', color: palette('dark').grey[300] },
  ];

  const handleCloseDateModal = () => {
    setOpenDateModal(false);
  };

  const handleConfirmAddEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const dateRegExp = /^(?!.*(?:y|mm|d|h|aa)).*$/i;
    console.log(dateRegExp.test(formJson.start));

    let newEvent: EventInput = {};
    const title: string = formJson.title;
    const start =
      (dateRegExp.test(formJson.start) &&
        new Date(formJson.start).toISOString()) ||
      undefined;
    const end =
      (dateRegExp.test(formJson.end) && new Date(formJson.end).toISOString()) ||
      undefined;
    const color: string = formJson.color;
    const allDay: boolean = formJson.allDay;
    newEvent = { title, start, end, color, allDay };

    if (title === '') {
      setError(true);
      return;
    }
    if (selectedDate) {
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();
      const { title, start, end, color, allDay } = newEvent;
      calendarApi.addEvent({
        id: `${new Date().toISOString()}-${title}`,
        title,
        start: start || selectedDate.startStr,
        end: end || selectedDate.endStr,
        allDay: allDay,
        backgroundColor: color,
        borderColor: color,
      });
    }
    handleCloseDateModal();
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
          noValidate: true,
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            handleConfirmAddEvent(event);
          },
          style: {
            width: isMobile ? '350px' : '500px',
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
          <Box display={'flex'} flexWrap={'wrap'} gap={'20px'}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="Event Title"
              type="text"
              error={error}
              helperText={error && 'Please enter a title for your event'}
              onError={() => setError(true)}
              onFocus={() => setError(false)}
              fullWidth
            />
            <DateTimePicker
              name="start"
              label="Event Start"
              format="YYYY-MM-DD hh:mm a"
              defaultValue={dayjs(selectedDate?.startStr)}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
              sx={{ width: isMobile ? '100%' : 'calc(50% - 10px)' }}
            />
            <DateTimePicker
              name="end"
              label="Event End"
              format="YYYY-MM-DD hh:mm a"
              defaultValue={dayjs(selectedDate?.endStr)}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
              sx={{ width: isMobile ? '100%' : 'calc(50% - 10px)' }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Background Color
              </InputLabel>
              <Select
                name="color"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={bgColors[0].color}
                label="Background Color"
              >
                {bgColors.map((color) => (
                  <MenuItem
                    key={color.title}
                    value={color.color}
                    title={color.title}
                  >
                    <Box
                      width={'50px'}
                      height={'25px'}
                      bgcolor={color.color}
                      borderRadius={'3px'}
                    ></Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="allDay"
                  defaultChecked
                  sx={{
                    color: 'text.secondary',
                    '&.Mui-checked': {
                      color: 'text.secondary',
                    },
                  }}
                />
              }
              label="AllDay"
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
