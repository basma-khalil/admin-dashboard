import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
// Components
import PageHeading from '../components/common/pageHeading/PageHeading';
// Data
import { faqData } from './data';
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const metadata: Metadata = {
  title: 'FAQ | Admin Dashboard',
  description: 'Next.js Admin Dashboard App',
};

export default function Faq() {
  return (
    <Box>
      <PageHeading title="faq" subtitle="frequently asked questions page" />

      <Box>
        {faqData.map((data) => (
          <Accordion key={data.id} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={data.ariaControls}
              id={data.id}
            >
              <Typography
                paragraph
                variant={'h5'}
                mb={0}
                color={'secondary'}
                textTransform={'capitalize'}
              >
                {data.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
