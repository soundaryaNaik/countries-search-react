import React, { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './components/CountryCard';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
      const data = await response.json();

      // ✅ Transform to match test structure
      const transformed = data.map((item) => ({
        name: item.common,
        flag: item.png,
      }));

      console.log('Fetched countries:', transformed);
      setCountries(transformed);
      setFiltered(transformed);
    } catch (err) {
      console.error('Error fetching countries:', err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const q = query.toLowerCase();
    const result = countries.filter(
      (country) =>
        country.name &&
        country.flag &&
        country.name.toLowerCase().includes(q)
    );
    setFiltered(result);
  }, [query, countries]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for countries..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="countriesWrapper">
        {filtered.length === 0 ? (
          <p>No countries to display.</p>
        ) : (
          filtered.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
