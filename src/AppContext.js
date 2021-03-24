import React from 'react';

const AppContext = React.createContext({
  covidData: [],
  loading: true,
  countriesData: [],
  visible: 'Global',
  setVisible: () => {},
  value: 1,
  setValue: () => {},
  sortedCountryList: () => {},
  setCovidData: () => {},
  setCountriesData: () => {},
  getCovidData: () => {},
});

export default AppContext;
