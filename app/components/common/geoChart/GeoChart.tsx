// Need client component because of nivo/geo
'use client';

import { ResponsiveChoropleth } from '@nivo/geo';
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material';
// Custom hooks
import useFetch from '../../../hooks/useFetch';
// Components
import Loading from '../../../loading';
import Error from '../../../error';
// Data
import { countries } from '../../../api/data/world-countries';
// Types
import type { Theme } from '@mui/material';
interface GeoChartProps {
  isDashboard?: boolean;
}

export default function GeoChart({ isDashboard = false }: GeoChartProps) {
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  // Simulate fetching the data from an API endpoint instead of importing the data directly
  const geoDataURL = '/api/geo-chart';
  const { data, isLoading, error } = useFetch<GeoChartData>(geoDataURL);

  return (
    <>
      {error ? (
        <Error error={error} reset={() => {}} />
      ) : isLoading ? (
        <Loading />
      ) : data ? (
        <Box
          className="test"
          sx={{
            width: '100%',
            height: '100%',
            display: 'table',
            tableLayout: 'fixed',
            textTransform: 'capitalize',
            position: 'relative',
            '& svg g path': {
              transition: 'opacity 0.3s',
            },
            '& svg g path:hover': {
              opacity: 0.5,
            },
            '& .hide': {
              opacity: 0.5,
            },
            '& .toggle text': {
              textDecoration: 'line-through',
            },
          }}
        >
          {data.length === 0 && (
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
                zIndex: 100,
              }}
            >
              <p>no data to display</p>
            </Box>
          )}
          <Box position={'absolute'} width={'100%'} height={'100%'}>
            <ResponsiveChoropleth
              data={data}
              theme={{
                tooltip: {
                  container: {
                    color: '#141414',
                  },
                },
              }}
              features={countries.features}
              margin={{
                top: isMobile ? (isDashboard ? 0 : -100) : 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              domain={[0, 1000000]}
              unknownColor="#666666"
              label="properties.name"
              valueFormat=".2s"
              projectionScale={isMobile || isDashboard ? 40 : 150}
              projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
              projectionRotation={[0, 0, 0]}
              borderWidth={1.5}
              borderColor="#fff"
              legends={
                !isDashboard
                  ? [
                      {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: isMobile ? 50 : -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: textColor,
                        itemOpacity: 0.75,
                        symbolSize: 18,
                        toggleSerie: true,
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemTextColor: textColor,
                              itemOpacity: 1,
                            },
                          },
                        ],
                        onClick: function (datum, evt) {
                          const countries = [
                            ...document.querySelectorAll('.test svg g path'),
                          ] as HTMLElement[];
                          countries.forEach((country) => {
                            if (country.getAttribute('fill') === datum.id) {
                              country.classList.toggle('hide');
                              (
                                evt.target as HTMLElement
                              ).parentElement?.classList.toggle('toggle');
                            }
                          });
                        },
                      },
                    ]
                  : undefined
              }
            />
          </Box>
        </Box>
      ) : null}
    </>
  );
}
