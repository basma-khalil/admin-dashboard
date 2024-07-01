import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
// Data
import { mockTransactions } from '../../../../data/mockData';

// Simulate fetching the data from an API endpoint instead of importing the data directly
const getTransactionsData = async (): Promise<TransactionsData> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  //const transactionsDataUrl ='https://basma-khalil.github.io/admin-dashboard/data/api/transactions.json';
  const transactionsDataUrl ='https://admin-dashboard-theme.netlify.app/api/transactions';

  const response = await fetch(transactionsDataUrl, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};

export default async function Transactions() {
  const transactionsData = await getTransactionsData();

  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      <List sx={{ padding: '0' }}>
        {transactionsData.map((data, index) => (
          <ListItem
            key={data.txId + '-' + index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px',
              fontSize: '13px',
              borderTopWidth: '4px',
              borderTopStyle: 'solid',
              borderTopColor: 'primary.main',
            }}
          >
            <Box>
              <Typography
                variant="h5"
                color='secondary.main'
                fontWeight={600}
              >
                {data.txId}
              </Typography>
              <Typography>{data.user}</Typography>
            </Box>

            <Box component='span'>{data.date}</Box>

            <Box
              component='span'
              padding='5px 10px'
              bgcolor='secondary.main'
              borderRadius='4px'
            >{'$' + data.cost}</Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
