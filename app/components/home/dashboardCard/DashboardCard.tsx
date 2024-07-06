import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// Types
interface DashboardCardProps {
  children: React.ReactNode;
  title: string;
  padding?: string;
}

export default function DashboardCard({
  children,
  title,
  padding = '30px',
}: Readonly<DashboardCardProps>) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        padding: padding,
      }}
    >
      <Typography
        component={'h4'}
        variant="h5"
        padding={padding === '0' ? '15px' : undefined}
        fontWeight="600"
        textTransform={'capitalize'}
      >
        {title}
      </Typography>

      <Box flex={'1'} minHeight={0}>
        {children}
      </Box>
    </Paper>
  );
}
