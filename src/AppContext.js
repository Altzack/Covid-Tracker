import React from 'react';

const AppContext = React.createContext({
  covidData: [],
  loading: true,
  countriesData: [],
  visible: 'US',
  setVisible: () => {},
});

export default AppContext;
