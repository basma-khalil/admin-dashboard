// Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
// Types
import type { SidebarList } from './types';

export const home: SidebarList = {
  items: [
    {
      text: 'dashboard',
      icon: <HomeOutlinedIcon />,
      path: '/',
    },
  ],
};

export const data: SidebarList = {
  title: 'data',
  items: [
    {
      text: 'manage team',
      icon: <PeopleOutlinedIcon />,
      path: '/team',
    },
    {
      text: 'contacts information',
      icon: <ContactsOutlinedIcon />,
      path: '/contacts',
    },
    {
      text: 'invoices balance',
      icon: <ReceiptOutlinedIcon />,
      path: '/invoices',
    },
  ],
};

export const pages: SidebarList = {
  title: 'pages',
  items: [
    {
      text: 'profile form',
      icon: <PersonOutlinedIcon />,
      path: '/form',
    },
    {
      text: 'calendar',
      icon: <CalendarTodayOutlinedIcon />,
      path: '/calendar',
    },
    {
      text: 'faq page',
      icon: <HelpOutlineOutlinedIcon />,
      path: '/faq',
    },
  ],
};

export const charts: SidebarList = {
  title: 'charts',
  items: [
    {
      text: 'bar chart',
      icon: <BarChartOutlinedIcon />,
      path: '/bar',
    },
    {
      text: 'pie chart',
      icon: <PieChartOutlineOutlinedIcon />,
      path: '/pie',
    },
    {
      text: 'line chart',
      icon: <TimelineOutlinedIcon />,
      path: '/line',
    },
    {
      text: 'geography chart',
      icon: <MapOutlinedIcon />,
      path: '/geography',
    },
  ],
};
