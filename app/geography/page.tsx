import Box from '@mui/material/Box';
// Components
import PageHeading from '../components/pageHeading/PageHeading';
import GeoChart from '../components/geoChart/GeoChart';

export default function Geography() {
  return (
    <Box height={'75vh'}>
      <PageHeading title="geography" subtitle="simple geography chart" />
      <GeoChart />
    </Box>
  );
}
