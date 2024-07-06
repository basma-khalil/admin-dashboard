import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Components
import PageHeading from './components/common/pageHeading/PageHeading';
import PdfDownloader from './components/home/pdfDownloader/PdfDownloader';
import GaugeCard from './components/home/gaugeCard/GaugeCard';
import DashboardCard from './components/home/dashboardCard/DashboardCard';
import Transactions from './components/home/transactions/Transactions';
import LineChart from './components/common/lineChart/LineChart';
import BarChart from './components/common/barChart/BarChart';
import GeoChart from './components/common/geoChart/GeoChart';
// Icons
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import GaugeChart from './components/home/gaugeChart/GaugeChart';

const gaugeData = [
  {
    title: 12361,
    subtitle: 'emails sent',
    progress: 75,
    increase: 14,
    icon: <EmailIcon />,
  },
  {
    title: 431225,
    subtitle: 'sales obtained',
    progress: 50,
    increase: 21,
    icon: <PointOfSaleIcon />,
  },
  {
    title: 32441,
    subtitle: 'new clients',
    progress: 30,
    increase: 5,
    icon: <PersonAddIcon />,
  },
  {
    title: 1325134,
    subtitle: 'traffic received',
    progress: 80,
    increase: 43,
    icon: <TrafficIcon />,
  },
];

export default function Home() {
  return (
    <Box>
      {/* HEADER */}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        rowGap={3}
        mb={'40px'}
        sx={{
          '& > div': {
            marginBottom: 0,
          },
        }}
      >
        <PageHeading title="dashboard" subtitle="welcome to your dashboard" />
        <PdfDownloader
          srcElementId="dashboard-report"
          pdfFileName="dashboard-report"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Grid container spacing={2.5} id="dashboard-report">
        {/* GAUGES */}
        {gaugeData.map((data) => (
          <Grid key={data.subtitle} item xs={12} sm={6} md={3}>
            <GaugeCard
              title={data.title}
              subtitle={data.subtitle}
              progress={data.progress}
              increase={data.increase}
              icon={data.icon}
            />
          </Grid>
        ))}

        {/* LINE CHART */}
        <Grid item xs={12} md={8}>
          <DashboardCard title="revenue generated">
            <Box height={'100%'} display={'flex'} flexDirection={'column'}>
              <Typography
                component={'span'}
                variant="h3"
                display={'block'}
                pt={'3px'}
                fontWeight="bold"
                color={'secondary.main'}
              >
                $59,342.32
              </Typography>
              <Box flex={'1'}>
                <LineChart isDashboard />
              </Box>
            </Box>
          </DashboardCard>
        </Grid>

        {/* TRANSACTIONS */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="recent transactions" padding="0">
            <Transactions />
          </DashboardCard>
        </Grid>

        {/* CAMPAIGN */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="campaign">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={'space-between'}
              alignItems="center"
              height={'100%'}
            >
              <GaugeChart progress={75} size={240} />
              <Box>
                <Typography
                  paragraph
                  mb={0}
                  align="center"
                  color={'secondary.main'}
                >
                  $48,352 revenue generated
                </Typography>
                <Typography
                  paragraph
                  mb={0}
                  align="center"
                  sx={{
                    '&:first-letter': {
                      textTransform: 'uppercase',
                    },
                  }}
                >
                  includes extra expenditures and costs
                </Typography>
              </Box>
            </Box>
          </DashboardCard>
        </Grid>

        {/* BAR CHART */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="sales quantity">
            <BarChart isDashboard />
          </DashboardCard>
        </Grid>

        {/* MAP CHART */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="geography based traffic">
            <GeoChart isDashboard />
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
}
