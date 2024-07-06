import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material';
// Utils
import { palette } from '../../../theme/theme';
// Types
import type { ApexOptions } from 'apexcharts';

export default function useLineChartOptions(isDashboard: boolean = false) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const lineOptions = useMemo(() => {
    const customIcon = `
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-havevq-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadOutlinedIcon">
      <path d="M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17 9.83 11zm-6 7h14v2H5z"></path>
    </svg>
    `;
    const initOptions: ApexOptions = {
      chart: {
        type: 'line',
        background: 'transparent',
        toolbar: {
          tools: {
            download: isDashboard ? customIcon : true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      colors: isDashboard
        ? [
            palette('dark').red[200],
            palette('dark').blue[300],
            theme.palette.secondary.main,
          ]
        : ['#f1e15b', '#f47560', '#e8c1a0', '#e8a838', '#97e3d5'],
      theme: {
        mode: mode,
      },
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
        labels: {
          style: {
            fontFamily: 'inherit',
          },
        },
        title: {
          text: isDashboard ? undefined : '$ (thousands)',
          style: {
            fontFamily: 'inherit',
            fontWeight: 'bold',
          },
        },
      },
      xaxis: {
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
          horizontal: 10,
        },
      },
      markers: {
        size: 4,
        colors: isDashboard
          ? `${theme.palette.background.paper}`
          : `${theme.palette.background.default}`,
        strokeColors: isDashboard
          ? [
              palette('dark').red[200],
              palette('dark').blue[300],
              theme.palette.secondary.main,
            ]
          : ['#f1e15b', '#f47560', '#e8c1a0', '#e8a838', '#97e3d5'],
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
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: isDashboard ? '100%' : '60%',
            },
            xaxis: {
              title: {
                offsetY: -30,
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
  }, [
    isDashboard,
    mode,
    theme.palette.secondary.main,
    theme.palette.background.default,
    theme.palette.background.paper,
  ]);

  const [options, setOptions] = useState(lineOptions);

  // If the lineOptions dependencies change
  useEffect(() => {
    let unmounted = false;
    !unmounted && setOptions(lineOptions);

    return () => {
      unmounted = true;
    };
  }, [lineOptions]);

  return { options, setOptions };
}
