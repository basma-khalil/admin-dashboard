// Need client component because of useTheme and MUI DataGrid column renderCell
'use client';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Utils
import { palette } from '../theme/theme';
// Custom hooks
import useFetch from '../hooks/useFetch';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import CustomDataGrid from '../components/common/customDataGrid/CustomDataGrid';
import Loading from '../loading';
import Error from '../error';
// Icons
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
// Types
import type { GridColDef } from '@mui/x-data-grid';

export default function Team() {
  const theme = useTheme();
  const color = palette(theme.palette.mode);

  // Simulate fetching the data from an API endpoint instead of importing the data directly
  const teamDataURL = '/api/team';
  const { data, isLoading, error } = useFetch<TeamData>(teamDataURL);

  let rows: TeamData;
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
      field: 'age',
      headerName: 'age',
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
      field: 'access',
      headerName: 'access level',
      flex: 1,
      minWidth: 100,
      align: 'center',
      cellClassName: 'access-column--cell',
      renderCell: ({ row: { access } }) => (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'5px'}
          width={'60%'}
          minWidth={85}
          padding={'5px'}
          bgcolor={
            access === 'admin'
              ? color.green[600]
              : access === 'manager'
              ? color.green[700]
              : color.green[700]
          }
          borderRadius={'4px'}
        >
          {access === 'admin' ? (
            <AdminPanelSettingsOutlinedIcon />
          ) : access === 'manager' ? (
            <SecurityOutlinedIcon />
          ) : (
            <LockOpenOutlinedIcon />
          )}
          <Typography>{access}</Typography>
        </Box>
      ),
    },
  ];

  return (
    <>
      {error ? (
        <Error error={error} reset={() => {}} />
      ) : isLoading ? (
        <Loading />
      ) : rows ? (
        <Box
          sx={{
            '& .secondary--color': { color: 'secondary.light' },
            '& .access-column--cell': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <PageHeading title="team" subtitle="managing the team members" />
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
