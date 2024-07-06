// Need client component because of MUI DataGrid slot props
'use client';

import Box from '@mui/material/Box';
import { GridToolbar, type GridColDef } from '@mui/x-data-grid';
// Custom hooks
import useFetch from '../hooks/useFetch';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import CustomDataGrid from '../components/common/customDataGrid/CustomDataGrid';
import Loading from '../loading';
import Error from '../error';

export default function Contacts() {
  // Simulate fetching the data from an API endpoint instead of importing the data directly
  const contactsDataURL = '/api/contacts';
  const { data, isLoading, error } = useFetch<ContactsData>(contactsDataURL);

  let rows: ContactsData;
  data ? (rows = data) : (rows = []);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'registrar ID' },
    {
      field: 'name',
      headerName: 'name',
      flex: 1,
      minWidth: 100,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'phone number',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'email',
      headerName: 'email',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'address',
      headerName: 'address',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'city',
      headerName: 'city',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'zipCode',
      headerName: 'zip code',
      flex: 1,
      minWidth: 100,
    },
  ];

  return (
    <>
      {error ? (
        <Error error={error} reset={() => {}} />
      ) : isLoading ? (
        <Loading />
      ) : rows ? (
        <Box sx={{ '& .name-column--cell': { color: 'secondary.light' } }}>
          <PageHeading
            title="contacts"
            subtitle="list of contacts for future reference"
          />
          <CustomDataGrid
            rows={rows}
            columns={columns}
            checkboxSelection={false}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      ) : null}
    </>
  );
}
