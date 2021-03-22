import './App.css';
import styled from 'styled-components/macro';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import FourOhFour from './containers/common/FourOhFour';
import { useIsTabletOrMobile } from './containers/common/responsiveComponents';
import Footer from './containers/common/Footer';
import Header from './containers/common/Header';
import AppContext from './AppContext';
import LandingPage from './containers/LandingPage/LandingPage';
import config from './config';
import { message } from 'antd';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: rgba(232, 230, 227, 0.85);
  // background-color: rgb(27, 29, 30);
  background-color: rgb(250, 250, 250);
  ${({ isMobile }) => isMobile && 'overflow-x: hidden;'}
  max-width: 100%;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding-top: 64px;
  min-height: 100vh;
`;

const AppWrapper = withRouter(({ children }) => {
  const { isTabletOrMobile } = useIsTabletOrMobile();
  return (
    <AppContainer isMobile={isTabletOrMobile}>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </AppContainer>
  );
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidData: [],
      loading: true,
      countriesData: [],
    };
  }

  setCovidData = (data) => {
    this.setState({
      covidData: data,
      loading: false,
    });
  };

  setCountriesData = (data) => {
    this.setState({
      countriesData: data,
      loading: false,
    });
  };

  getCovidData = () => {
    fetch(`${config.API_ENDPOINT}/states.json?apiKey=${config.API_KEY}`, {
      method: 'GET',
      headers: {},
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setCovidData)
      .catch((err) => {
        message.error(`Please try again later: ${err}`);
      });
  };

  getCountriesData = () => {
    fetch(`${config.COUNTRIES_API_ENDPOINT}`, {
      method: 'GET',
      headers: {},
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setCountriesData)
      .catch((err) => {
        message.error(`Please try again later: ${err}`);
      });
  };

  componentDidMount = () => {
    this.getCovidData();
    this.getCountriesData();
  };

  render() {
    const contextValues = {
      covidData: this.state.covidData || [],
      loading: this.state.loading,
      countriesData: this.state.countriesData,
    };

    return (
      <AppContext.Provider value={contextValues}>
        {console.log(this.state.countriesData)}
        <>
          <Router>
            <QueryParamProvider ReactRouterRoute={Route}>
              <AppWrapper>
                <Switch>
                  <Route exact path="/">
                    <LandingPage />
                  </Route>
                  <Route>
                    <FourOhFour />
                  </Route>
                </Switch>
              </AppWrapper>
            </QueryParamProvider>
          </Router>
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
