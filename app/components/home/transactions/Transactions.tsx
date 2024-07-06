import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const getTransactionsData = async (): Promise<TransactionsData> => {
  // Simulate fetching the data from an API endpoint instead of importing the data directly
  // In the server component, we can not fetch data with a relative URL (which we do to fetch data from our own API route). Although we can get around this by using environment variables to switch the API endpoint between development and production, this is not a best practice. Therefore, it is better to use a separate API for the server component fetch data

  // const baseUrl = process.env.API_URL;
  // const transactionsDataUrl = `${baseUrl}/api/transactions` || '';
  const transactionsDataUrl =
    'https://basma-khalil.github.io/admin-dashboard/app/api/data/transactions.json';

  const response = await fetch(transactionsDataUrl, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: TransactionsData = await response.json();
  return data;
};

export default async function Transactions() {
  const transactionsData = await getTransactionsData();

  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      {!transactionsData || transactionsData.length === 0 ? (
        <Typography
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
        >
          No data to display
        </Typography>
      ) : (
        <List sx={{ padding: '0' }}>
          {transactionsData.map((data, index) => (
            <ListItem
              key={`${data.txId}-${index}`}
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
                  color={'secondary.main'}
                  fontWeight={600}
                >
                  {data.txId}
                </Typography>
                <Typography>{data.user}</Typography>
              </Box>

              <Box component={'span'}>{data.date}</Box>

              <Box
                component={'span'}
                padding={'5px 10px'}
                bgcolor={'secondary.main'}
                borderRadius={'4px'}
              >{`$${data.cost}`}</Box>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
