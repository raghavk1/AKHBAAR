import React, { createContext, useContext, useState } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('in');

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => useContext(CountryContext);
