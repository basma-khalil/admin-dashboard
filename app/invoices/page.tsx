// Need client component because of MUI DataGrid column valueFormatter
'use client';

import Box from '@mui/material/Box';
// Custom hooks
import useFetch from '../hooks/useFetch';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import CustomDataGrid from '../components/common/customDataGrid/CustomDataGrid';
import Loading from '../loading';
import Error from '../error';
// Types
import { type GridColDef } from '@mui/x-data-grid';

export default function Invoices() {
  // Simulate fetching the data from an API endpoint instead of importing the data directly
  const invoicesDataURL = '/api/invoices';
  const { data, isLoading, error } = useFetch<InvoicesData>(invoicesDataURL);

  let rows: InvoicesData;
  data ? (rows = data) : (rows = []);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'name',
      flex: 1,
      minWidth: 100,
      cellClassName: 'secondary--color',
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
      field: 'cost',
      headerName: 'cost',
      flex: 1,
      minWidth: 100,
      cellClassName: 'secondary--color',
      valueFormatter: (value: number) => {
        return `$${value}`;
      },
    },
    {
      field: 'date',
      headerName: 'date',
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
        <Box sx={{ '& .secondary--color': { color: 'secondary.light' } }}>
          <PageHeading title="invoices" subtitle="list of invoice balances" />
          <CustomDataGrid
            rows={rows}
            columns={columns}
            checkboxSelection={true}
          />
        </Box>
      ) : null}
    </>
  );
}
