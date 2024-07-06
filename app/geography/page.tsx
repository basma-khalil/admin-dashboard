import type { Metadata } from 'next';
import Box from '@mui/material/Box';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
import GeoChart from '../components/common/geoChart/GeoChart';

export const metadata: Metadata = {
  title: 'Geography Chart | Admin Dashboard',
  description: 'Next.js Admin Dashboard App',
};

export default function Geography() {
  return (
    <Box height={'75vh'}>
      <PageHeading title="geography" subtitle="simple geography chart" />
      <GeoChart />
    </Box>
  );
}
