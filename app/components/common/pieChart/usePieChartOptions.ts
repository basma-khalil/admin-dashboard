import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material';
// Types
import type { ApexOptions } from 'apexcharts';

export default function usePieChartOptions() {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const pieOptions = useMemo(() => {
    const initOptions: ApexOptions = {
      chart: {
        type: 'pie',
        background: 'transparent',
        events: {
          animationEnd: (chart) => {
            chart.windowResizeHandler();
          },
        },
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
      colors: ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#97e3d5'],
      labels: ['team 1', 'team 2', 'team 3', 'team 4', 'team 5'],
      theme: {
        mode: mode,
      },
      legend: {
        position: 'bottom',
        fontFamily: 'inherit',
        markers: {
          width: 18,
          height: 18,
          offsetX: -5,
        },
        itemMargin: {
          horizontal: 30,
          vertical: 20,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '50%',
          },
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: [theme.palette.background.default],
        width: 4,
      },
      fill: {
        opacity: 1,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              offsetY: 10,
              itemMargin: {
                horizontal: 10,
                vertical: 10,
              },
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
  }, [mode, theme.palette.background.default]);

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
