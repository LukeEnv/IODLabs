import React, { useState } from 'react';

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

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {rate !== null && !loading && !error && (
        <p>
          Current Bitcoin price in {currency}: {rate}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
