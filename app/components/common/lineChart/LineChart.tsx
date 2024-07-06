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
import useLineChartOptions from './useLineChartOptions';
// Types
interface LineChartProps {
  isDashboard?: boolean;
}

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LineChart({ isDashboard }: LineChartProps) {
  const [isClient, setIsClient] = useState(false);
  const { options } = useLineChartOptions(isDashboard);

  // Simulate fetching the data from an API endpoint instead of importing the data directly
  const lineDataURL = '/api/line-chart';
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
            '& .apexcharts-toolbar': isDashboard
              ? {
                  top: '-50px !important',
                  right: '-5px !important',
                }
              : undefined,
            '& .apexcharts-menu-icon': isDashboard
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'auto',
                  height: 'auto',
                  padding: '8px',
                  color: 'secondary.main',
                  borderRadius: '50%',
                  transform: 'none',
                  transition:
                    'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }
              : undefined,
            '& .apexcharts-menu-icon svg': isDashboard
              ? {
                  width: '26px',
                  height: '26px',
                  fill: 'currentcolor !important',
                }
              : undefined,
            '& .apexcharts-legend:not(.apx-legend-position-bottom)': {
              justifyContent: 'flex-end',
              marginBottom: isDashboard ? '25px' : '50px',
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
