import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img src={country.flag} alt={country.name} />
      <p>{country.name}</p>
    </div>
  );
};

export default CountryCard;
