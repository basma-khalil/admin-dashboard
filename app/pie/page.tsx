import { Metadata } from 'next';
import Box from '@mui/material/Box';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import PieChart from '../components/common/pieChart/PieChart';

export const metadata: Metadata = {
  title: 'Pie Chart | Admin Dashboard',
  description: 'Next.js Admin Dashboard App',
};

export default function Pie() {
  return (
    <Box height={'75vh'}>
      <PageHeading title="pie chart" subtitle="simple pie chart" />
      <PieChart />
    </Box>
  );
}
