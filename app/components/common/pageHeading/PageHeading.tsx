import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//Types
interface PageHeadingProps {
  title: string;
  subtitle: string;
}

export default function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <Box mb="40px">
      <Typography
        component={'h1'}
        variant="h2"
        mb={'5px'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
      >
        {title}
      </Typography>
      <Typography
        paragraph
        variant="h5"
        mb={0}
        color={'secondary.main'}
        textTransform={'lowercase'}
        sx={{
          '&::first-letter': {
            textTransform: 'uppercase',
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
