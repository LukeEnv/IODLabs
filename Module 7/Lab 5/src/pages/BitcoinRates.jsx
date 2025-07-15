import React, { useState } from 'react';
import { MenuItem, Select, Typography, CircularProgress, Box } from '@mui/material';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
      );
      const data = await response.json();
      setRate(data.bitcoin[currency.toLowerCase()]);
    } catch (err) {
      setError('Failed to fetch Bitcoin rate');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRate();
  }, [currency]);

  return (
    <Box>
      <Typography variant="h5">Bitcoin Exchange Rate</Typography>
      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        fullWidth
        sx={{ mt: 2 }}
      >
        {currencies.map((curr) => (
          <MenuItem value={curr} key={curr}>
            {curr}
          </MenuItem>
        ))}
      </Select>
      {loading && <CircularProgress sx={{ mt: 2 }} />}
      {error && <Typography color="error">{error}</Typography>}
      {rate !== null && !loading && !error && (
        <Typography sx={{ mt: 2 }}>
          Current Bitcoin price in {currency}: {rate}
        </Typography>
      )}
    </Box>
  );
}

export default BitcoinRates;
