import React, { useState } from 'react';
import useBitcoinRate from './useBitcoinRate';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, error, loading } = useBitcoinRate(currency);

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
