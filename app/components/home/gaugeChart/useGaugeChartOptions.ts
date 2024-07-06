import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material';
// Types
import type { ApexOptions } from 'apexcharts';

export default function useGaugeChartOptions(size: number) {
  const theme = useTheme();

  const pieOptions = useMemo(() => {
    const initOptions: ApexOptions = {
      chart: {
        type: 'radialBar',
        background: 'transparent',
        offsetX: size === 117 ? 35 : 0,
        toolbar: {
          show: false,
        },
      },
      colors: [theme.palette.secondary.main],
      grid: {
        padding: {
          top: size === 117 ? -15 : 0,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: size === 117 ? '35%' : '55%',
            margin: 0,
          },
          track: {
            background: theme.palette.text.secondary,
          },
          dataLabels: {
            show: false,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      noData: {
        text: 'No data to display',
        style: {
          fontFamily: 'inherit',
        },
      },
    };
    return initOptions;
  }, [size, theme.palette.secondary.main, theme.palette.text.secondary]);

  const [options, setOptions] = useState(pieOptions);

  // If the lineOptions dependencies change
  useEffect(() => {
    let unmounted = false;
    !unmounted && setOptions(pieOptions);

    return () => {
      unmounted = true;
    };
  }, [pieOptions]);

  return { options, setOptions };
}
