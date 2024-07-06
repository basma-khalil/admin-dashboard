'use client';

import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Grow } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
// Types
import type { ComponentProps, SyntheticEvent } from 'react';
import type { UserFormValues } from './types';

const initialValues: UserFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegExp =
  /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const checkoutSchema: yup.ObjectSchema<UserFormValues> = yup.object({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'phone number is not valid')
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
});

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit: ComponentProps<
    typeof Formik<UserFormValues>
  >['onSubmit'] = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(values),
        }
      );
      const newUser = await response.json();
      console.log(newUser);
      resetForm();
      setIsOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCloseNote = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Box>
      <PageHeading title="create user" subtitle="create a new user profile" />
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display={'flex'}
              gap={'30px'}
              flexWrap={'wrap'}
              sx={{
                '& .Mui-error, & .MuiInputLabel-root': {
                  textTransform: 'capitalize',
                },
                '& .MuiInputLabel-root:not(& .Mui-error)': {
                  color: 'text.primary',
                },
                '& .MuiInputLabel-shrink:not(& .Mui-error)': {
                  color: 'text.secondary',
                },
              }}
            >
              <TextField
                fullWidth
                id="first-name"
                variant="filled"
                type="text"
                name="firstName"
                label="first name"
                autoComplete="given-name"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  width: { sm: 'calc(50% - 15px)' },
                }}
              />

              <TextField
                fullWidth
                id="last-name"
                variant="filled"
                type="text"
                name="lastName"
                label="last name"
                autoComplete="family-name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  width: { sm: 'calc(50% - 15px)' },
                }}
              />

              <TextField
                fullWidth
                id="email"
                variant="filled"
                type="email"
                name="email"
                label="email"
                autoComplete="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                id="contact"
                variant="filled"
                type="text"
                name="contact"
                label="contact number"
                autoComplete="tel"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />

              <TextField
                fullWidth
                id="address1"
                variant="filled"
                type="text"
                name="address1"
                label="address 1"
                autoComplete="address-line1"
                value={values.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
              />

              <TextField
                fullWidth
                id="address2"
                variant="filled"
                type="text"
                name="address2"
                label="address 2"
                autoComplete="address-line2"
                value={values.address2}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
              />
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'} mt={'20px'}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ textTransform: 'capitalize' }}
              >
                create new user
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Snackbar
        open={isOpen}
        onClose={handleCloseNote}
        message="a new user has been added"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={3000}
        TransitionComponent={Grow}
        sx={{
          '& .MuiSnackbarContent-message': {
            '&::first-letter': { textTransform: 'uppercase' },
          },
        }}
      />
    </Box>
  );
}
