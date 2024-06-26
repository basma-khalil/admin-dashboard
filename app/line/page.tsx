import Box from '@mui/material/Box';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import LineChart from '../components/common/lineChart/LineChart';

export default function Line() {
  return (
    <Box height={'75vh'}>
      <PageHeading title="line chart" subtitle="simple line chart" />
      <LineChart />
    </Box>
  );
}
