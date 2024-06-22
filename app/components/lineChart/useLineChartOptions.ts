import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material';
// Types
import type { ApexOptions } from 'apexcharts';

export default function useLineChartOptions() {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const lineOptions = useMemo(() => {
    const initOptions: ApexOptions = {
      chart: {
        type: 'line',
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
      colors: ['#f1e15b', '#f47560', '#e8c1a0', '#e8a838', '#97e3d5'],
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
      grid: {
        show: false,
      },
      yaxis: {
        stepSize: 100,
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        title: {
          text: '$ (thousands)',
          style: {
            fontFamily: 'inherit',
            fontWeight: 'bold',
          },
        },
      },
      xaxis: {
        title: {
          text: 'month',
          style: {
            fontFamily: 'inherit',
            fontWeight: 'bold',
          },
        },
        categories: [
          'jan',
          'feb',
          'mar',
          'apr',
          'may',
          'jun',
          'jul',
          'aug',
          'sep',
          'oct',
          'nov',
          'dec',
        ],
        tickPlacement: 'on',
      },
      legend: {
        position: 'right',
        fontFamily: 'inherit',
        markers: {
          width: 12,
          height: 12,
          radius: 12,
          offsetX: -5,
        },
        itemMargin: {
          vertical: 5,
          horizontal: 20,
        },
      },
      markers: {
        size: 4,
        colors: `${theme.palette.background.default}`,
        strokeColors: ['#f1e15b', '#f47560', '#e8c1a0', '#e8a838', '#97e3d5'],
        fillOpacity: 0,
        hover: {
          sizeOffset: 1,
        },
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: 2,
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
  }, [mode, theme.palette.background.default]);

  const [options, setOptions] = useState(lineOptions);

  useEffect(() => {
    setOptions(lineOptions);
  }, [lineOptions]);

  return { options, setOptions };
}
