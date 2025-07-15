import React, { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRate = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        if (isMounted) {
          setRate(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (error) {
        console.error('Error fetching Bitcoin rate:', error);
      }
    };

    fetchRate();

    return () => {
      isMounted = false;
    };
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
      {rate !== null && (
        <p>
          Current Bitcoin price in {currency}: {rate}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
