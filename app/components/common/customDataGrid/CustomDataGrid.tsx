'use client';

import { palette } from '@/app/theme/theme';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import {
  DataGrid,
  type GridColDef,
  type GridSlotsComponent,
} from '@mui/x-data-grid';

export default function CustomDataGrid({
  rows,
  columns,
  checkboxSelection,
  slots,
}: {
  rows: readonly any[];
  columns: GridColDef<(typeof rows)[number]>[];
  checkboxSelection: boolean;
  slots?: Partial<GridSlotsComponent>;
}) {
  const theme = useTheme();
  const color = palette(theme.palette.mode);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'table',
        tableLayout: 'fixed',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        slots={slots}
        sx={{
          height: '75vh',
          '&.MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-main': {
            backgroundColor: 'background.paper',
          },
          '& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-footerContainer':
            {
              background: color.blue[700],
              border: 'none',
            },
          '& .MuiDataGrid-topContainer, & .MuiDataGrid-columnHeaders': {
            textTransform: 'capitalize',
            border: 'none',
          },
          '& .MuiCheckbox-root, & .MuiCheckbox-root.Mui-checked': {
            color: color.green[200],
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: 'text.primary',
          },
        }}
      />
    </Box>
  );
}
