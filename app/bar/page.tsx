import Box from '@mui/material/Box';
// Components
import PageHeading from '../components/pageHeading/PageHeading';
import BarChart from '../components/barChart/BarChart';

export default function Bar() {
  return (
    <Box height={'75vh'}>
      <PageHeading title="bar chart" subtitle="simple bar chart" />
      <BarChart />
    </Box>
  );
}
