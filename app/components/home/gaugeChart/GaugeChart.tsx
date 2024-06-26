'use client';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
// Types
interface GaugeChartProps {
  progress: number;
  size?: number;
}

export default function GaugeChart({ progress, size = 40 }: GaugeChartProps) {
  const theme = useTheme();
  const angle = (progress / 100) * 360;

  return (
    // <Box
    //   sx={{
    //     width: `${size}px`,
    //     height: `${size}px`,
    //     //     display: 'grid',
    //     // gridTemplateColumns: 'repeat(1, 160px)',
    //     // gridGap: '80px',
    //     backgroundColor: 'text.secondary',
    //     borderRadius: '50%',
    //     '@keyframes fill': {
    //       '0%': {
    //         transform: 'rotate(0deg)',
    //       },
    //       '100%': {
    //         transform: `rotate(${angle}deg)`,
    //       },
    //     },
    //   }}
    // >
    //   <Box
    //     className="mask full"
    //     sx={{
    //       width: `${size}px`,
    //       height: `${size}px`,
    //       position: 'absolute',
    //       borderRadius: '50%',
    //       clip: `rect(0px, ${size}px, ${size}px, 75px)`,
    //       animation: 'fill ease-in-out 1.5s',
    //       transform: `rotate(${angle}deg)`,
    //     }}
    //   >
    //     <Box
    //       className="fill"
    //       sx={{
    //         width: `${size}px`,
    //         height: `${size}px`,
    //         position: 'absolute',
    //         borderRadius: '50%',
    //         clip: `rect(0px, 75px, ${size}px, 0px)`,
    //         backgroundColor: 'secondary.main',
    //         animation: 'fill ease-in-out 1.5s',
    //         transform: `rotate(${angle}deg)`,
    //       }}
    //     ></Box>
    //   </Box>
    //   <Box
    //     className="mask half"
    //     sx={{
    //       width: `${size}px`,
    //       height: `${size}px`,
    //       position: 'absolute',
    //       borderRadius: '50%',
    //       clip: `rect(0px, ${size}px, ${size}px, 75px)`,
    //     }}
    //   >
    //     <Box
    //       className="fill"
    //       sx={{
    //         width: `${size}px`,
    //         height: `${size}px`,
    //         position: 'absolute',
    //         borderRadius: '50%',
    //         clip: `rect(0px, 75px, ${size}px, 0px)`,
    //         backgroundColor: 'secondary.main',
    //         animation: 'fill ease-in-out 1.5s',
    //         transform: `rotate(${angle}deg)`,
    //       }}
    //     ></Box>
    //   </Box>
    //   <Box
    //     className="inside-circle"
    //     sx={{
    //       width: `calc(${size}px - 26px)`,
    //       height: `calc(${size}px - 26px)`,
    //       borderRadius: '50%',
    //       backgroundColor: theme.palette.background.paper,
    //       background-image: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
    //       marginTop: '13px',
    //       marginLeft: '13px',
    //       position: 'absolute',
    //       zIndex: 100,
    //     }}
    //   ></Box>
    // </Box>
    <Box
      sx={{
        background: `radial-gradient(${theme.palette.background.paper} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.text.secondary} ${angle}deg 360deg),
            ${theme.palette.secondary.main}`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
        // animation: 'fill 1.5s forwards',
        // '@keyframes fill': {
        //   '0%': {
        //     background: `radial-gradient(${theme.palette.background.paper} 55%, transparent 56%),
        //     conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.text.secondary} ${angle}deg 360deg),
        //     ${theme.palette.secondary.main}`,
        //   },
        //   '100%': {
        //     background: `radial-gradient(${theme.palette.background.paper} 55%, transparent 56%),
        //     conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.text.secondary} ${angle}deg 360deg),
        //     ${theme.palette.secondary.main}`,
        //   },
        // }
      }}
    />
  );
}
