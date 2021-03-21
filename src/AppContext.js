import React from 'react';

const AppContext = React.createContext({
  covidData: [],
  loading: true,
});

export default AppContext;
