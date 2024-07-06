'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
// Options
import useGaugeChartOptions from './useGaugeChartOptions';
// Types
interface GaugeChartProps {
  progress: number;
  size?: number;
}

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function GaugeChart({ progress, size = 117 }: GaugeChartProps) {
  const [isClient, setIsClient] = useState(false);
  const { options } = useGaugeChartOptions(size);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '100%',
        '& .apexcharts-canvas':
          size === 117
            ? {
                position: 'absolute',
                top: 0,
                right: 0,
              }
            : undefined,
      }}
    >
      {isClient && typeof window !== 'undefined' && (
        <Chart
          options={options}
          series={[progress]}
          type="radialBar"
          width={`${size}px`}
          height={'auto'}
        />
      )}
    </Box>
  );
}
