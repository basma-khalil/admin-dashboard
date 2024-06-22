import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material';
// Types
import type { ApexOptions } from 'apexcharts';

export default function useBarChartOptions() {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const barOptions = useMemo(() => {
    const initOptions: ApexOptions = {
      chart: {
        type: 'bar',
        stacked: true,
        background: 'transparent',
        toolbar: {
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      colors: ['#e8c1a0', '#f47560','#f1e15b', '#e8a838','#61cdbb', '#97e3d5'],
      theme: {
        mode: mode,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 10,
            },
          },
        },
      ],
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        title: {
          text: 'growth',
          style: {
            fontFamily: 'inherit',
            fontWeight: 'bold',
          },
        },
      },
      xaxis: {
        categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        tickPlacement: 'on',
        title: {
          text: 'month',
          style: {
            fontFamily: 'inherit',
            fontWeight: 'bold',
          },
        },
      },
      legend: {
        position: 'right',
        fontFamily: 'inherit',
        markers: {
          width: 20,
          height: 20,
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
      noData: {
        text: 'No data to display',
        style: {
          fontFamily: 'inherit',
        },
      },
    };

    return initOptions;
  }, [mode]);

  const [options, setOptions] = useState(barOptions);

  useEffect(() => {
    setOptions(barOptions);
  }, [barOptions]);

  return { options, setOptions };
}
