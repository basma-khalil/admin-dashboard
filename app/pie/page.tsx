import Box from '@mui/material/Box';
// Components
import PageHeading from '../components/pageHeading/PageHeading';
import PieChart from '../components/pieChart/PieChart';

export default function Pie() {
  return (
    <Box height={'75vh'}>
      <PageHeading title="pie chart" subtitle="simple pie chart" />
      <PieChart />
    </Box>
  );
}
