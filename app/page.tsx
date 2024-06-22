import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Components
import PageHeading from './components/pageHeading/PageHeading';
import GaugeCard from './components/gaugeCard/GaugeCard';
import DashboardCard from './components/dashboardCard/DashboardCard';
import LineChart from './components/lineChart/LineChart';
import BarChart from './components/barChart/BarChart';
import GeoChart from './components/geoChart/GeoChart';
// Icons
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import GaugeChart from './components/gaugeChart/GaugeChart';

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
        <Button
          variant="contained"
          startIcon={<DownloadOutlinedIcon />}
          sx={{
            alignSelf: 'flex-end',
            padding: '10px 20px',
            backgroundColor: 'text.secondary',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          download reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Grid container spacing={2.5}>
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
            <Typography
              component={'span'}
              variant="h3"
              fontWeight="bold"
              color={'secondary.main'}
            >
              $59,342.32
            </Typography>
            <LineChart />
          </DashboardCard>
        </Grid>

        {/* TRANSACTIONS */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="recent transactions">
            <Box></Box>
          </DashboardCard>
        </Grid>

        {/* CAMPAIGN */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="campaign">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <GaugeChart progress={75} size={125} />
              <Typography
                paragraph
                mt={'15px'}
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
          </DashboardCard>
        </Grid>

        {/* BAR CHART */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="sales quantity">
            <BarChart />
          </DashboardCard>
        </Grid>

        {/* MAP CHART */}
        <Grid item xs={12} md={4}>
          <DashboardCard title="geography based traffic">
            <GeoChart isDashboard={true} />
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
}
