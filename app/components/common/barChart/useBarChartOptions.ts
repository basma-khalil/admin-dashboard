import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material';
// Types
import type { ApexOptions } from 'apexcharts';

export default function useBarChartOptions(isDashboard: boolean = false) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const barOptions = useMemo(() => {
    const initOptions: ApexOptions = {
      chart: {
        type: 'bar',
        stacked: true,
        background: 'transparent',
        offsetX: isDashboard ? -10 : undefined,
        toolbar: {
          tools: {
            download: isDashboard ? false : true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      colors: [
        '#e8c1a0',
        '#f47560',
        '#f1e15b',
        '#e8a838',
        '#61cdbb',
        '#97e3d5',
      ],
      theme: {
        mode: mode,
      },
      dataLabels: {
        enabled: isDashboard ? false : true,
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        labels: {
          style: {
            fontFamily: 'inherit',
          },
        },
        title: {
          text: isDashboard ? undefined : 'growth',
          style: {
            fontFamily: 'inherit',
            fontWeight: 'bold',
          },
        },
      },
      xaxis: {
        categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        tickPlacement: 'on',
        labels: {
          style: {
            fontFamily: 'inherit',
          },
        },
        title: {
          text: isDashboard ? undefined : 'month',
          style: {
            fontFamily: 'inherit',
            fontWeight: 'bold',
          },
        },
      },
      legend: {
        position: isDashboard ? 'bottom' : 'right',
        offsetX: isDashboard ? -10 : -20,
        fontFamily: 'inherit',
        markers: {
          width: isDashboard ? 15 : 20,
          height: isDashboard ? 15 : 20,
          radius: 0,
          offsetX: -5,
        },
        itemMargin: {
          vertical: 1,
        },
      },
      fill: {
        opacity: 1,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: isDashboard ? '100%' : '60%',
            },
            xaxis: {
              title: {
                offsetY: -5,
              },
            },
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 10,
            },
          },
        },
      ],
      noData: {
        text: 'No data to display',
        style: {
          fontFamily: 'inherit',
        },
      },
    };
    return initOptions;
  }, [isDashboard, mode]);

  const [options, setOptions] = useState(barOptions);

  // If the lineOptions dependencies change
  useEffect(() => {
    let unmounted = false;
    !unmounted && setOptions(barOptions);

    return () => {
      unmounted = true;
    };
  }, [barOptions]);

  return { options, setOptions };
}
