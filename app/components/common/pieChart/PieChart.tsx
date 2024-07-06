// Need client component because of react-apexcharts
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
// Custom hooks
import useFetch from '../../../hooks/useFetch';
// Components
import Loading from '../../../loading';
import Error from '../../../error';
// Options
import usePieChartOptions from './usePieChartOptions';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function BarChart() {
  const [isClient, setIsClient] = useState(false);
  const { options, setOptions } = usePieChartOptions();

  // Simulate fetching the data from an API endpoint instead of importing the data directly
  const pieDataURL = '/api/pie-chart';
  const { data, isLoading, error } = useFetch<PieChartData>(pieDataURL);

  // const series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined =
  //   data?.map(({ data }) => data);
  // const labels: string[] = data?.map(({ name }) => name);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   let unmounted = false;
  //   !unmounted && isClient &&
  //     setOptions((prevOptions) => ({ ...prevOptions, labels }));
  //
  //   return () => {
  //     unmounted = true;
  //   };
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isClient]);

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined = [
    239, 170, 322, 503, 584,
  ];

  return (
    <>
      {error ? (
        <Error error={error} reset={() => {}} />
      ) : isLoading ? (
        <Loading />
      ) : series ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'table',
            tableLayout: 'fixed',
            textTransform: 'capitalize',
            '& .apexcharts-legend-series': {
              display: 'flex',
              alignItems: 'center',
              opacity: 0.85,
              '&:hover': {
                opacity: 1,
              },
            },
          }}
        >
          {isClient && typeof window !== 'undefined' && (
            <Chart
              options={options}
              series={series}
              type="donut"
              width={'100%'}
              height={'100%'}
            />
          )}
        </Box>
      ) : null}
    </>
  );
}
