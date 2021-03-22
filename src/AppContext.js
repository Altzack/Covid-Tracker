import React from 'react';

const AppContext = React.createContext({
  covidData: [],
  loading: true,
  countriesData: [],
});

export default AppContext;
