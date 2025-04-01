import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.coinpaprika.com/v1/tickers");
      const jsonData = await data.json();

      setCoins(jsonData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>The Coins {loading ? null : `(${coins.length})`}</h1>
      {loading ? <p>Loading</p> : null}
      <ul>
        {coins.map((item) => (
          <li key={item.id}>
            {item.name} ({item.symbol}): ${item.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
