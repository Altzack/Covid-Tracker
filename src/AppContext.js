import React from 'react';

const AppContext = React.createContext({
  covidData: [],
  loading: true,
  countriesData: [],
  visible: 'Global',
  setVisible: () => {},
});

export default AppContext;
