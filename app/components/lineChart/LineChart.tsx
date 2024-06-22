'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
// Custom hooks
import useFetch from '../../hooks/useFetch';
// Components
import Loading from '../../loading';
import Error from '../../error';
// Options
import useLineChartOptions from './useLineChartOptions';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LineChart() {
  const [isClient, setIsClient] = useState(false);
  const { options } = useLineChartOptions();

  const lineDataURL =
    'https://basma-khalil.github.io/admin-dashboard/data/api/line-chart.json';
  const { data, isLoading, error } = useFetch<
    ApexAxisChartSeries | ApexNonAxisChartSeries | undefined
  >(lineDataURL);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {error ? (
        <Error error={error} reset={() => {}} />
      ) : isLoading ? (
        <Loading />
      ) : data ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'table',
            tableLayout: 'fixed',
            textTransform: 'capitalize',
            '& .apexcharts-legend:not(.apx-legend-position-bottom)': {
              justifyContent: 'flex-end',
              marginBottom: '50px',
            },
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
              series={data}
              type="line"
              width={'100%'}
              height={'100%'}
            />
          )}
        </Box>
      ) : null}
    </>
  );
}
