import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img src={country.png} alt={country.common} />
      <p>{country.common}</p>
    </div>
  );
};

export default CountryCard;
