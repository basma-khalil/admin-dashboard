import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Component
import GaugeChart from '../gaugeChart/GaugeChart';
// Types
interface GaugeCardProps {
  title: number;
  subtitle: string;
  icon: JSX.Element;
  progress: number;
  increase: number;
}

export default function GaugeCard({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: GaugeCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{ width: '100%', height: '140px', padding: '30px' }}
    >
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box sx={{ '& svg': { color: 'secondary.main', fontSize: '26px' } }}>
          {icon}
          <Typography paragraph variant="h4" mb={'2px'} fontWeight={'bold'}>
            {title.toLocaleString('en-US')}
          </Typography>
        </Box>
        <GaugeChart progress={progress} />
      </Box>

      <Box
        display={'flex'}
        justifyContent={'space-between'}
        color={'secondary.main'}
      >
        <Typography component={'h4'} variant="h5" textTransform={'capitalize'}>
          {subtitle}
        </Typography>
        <Typography component={'span'} variant="h5" fontStyle={'italic'}>
          {`+${increase}%`}
        </Typography>
      </Box>
    </Paper>
  );
}
