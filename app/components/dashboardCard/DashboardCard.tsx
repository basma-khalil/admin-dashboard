import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function DashboardCard({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <Paper elevation={0} sx={{ height: '300px', padding: '30px', overflow: 'hidden' }}>
      <Typography
        component={'h4'}
        variant="h5"
        mb={'3px'}
        fontWeight="600"
        textTransform={'capitalize'}
      >
        {title}
      </Typography>

      <Box height={'100%'}>{children}</Box>
    </Paper>
  );
}
