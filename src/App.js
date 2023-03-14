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
import { message } from 'antd';
import FourOhFour from './containers/common/FourOhFour';
import { useIsTabletOrMobile } from './containers/common/responsiveComponents';
import Footer from './containers/common/Footer';
import Header from './containers/common/Header';
import AppContext from './AppContext';
import LandingPage from './containers/LandingPage/LandingPage';
import config from './config';

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
      value: 1,
    };
  }

  setCovidData = (data) => {
    this.setState({
      covidData: data,
      loading: false,
    });
  };

  sortUSCase = () => {
    const data = this.state.covidData.sort((a, b) => {
      return b.actuals.cases - a.actuals.cases;
    });
    this.setState({
      covidData: data,
    });
  };

  // usListFunc = () => {
  //   this.state.covidData.map((data) => {
  //     return (
  //       <StyledCard title={data.state}>
  //         <p>
  //           <span style={{ fontWeight: 300 }}>Cases: </span>
  //           {Number(data.actuals.cases).toLocaleString()}
  //         </p>
  //         <p>
  //           <span style={{ fontWeight: 300 }}>Deaths: </span>
  //           {Number(data.actuals.deaths).toLocaleString()}
  //         </p>
  //       </StyledCard>
  //     );
  //   });
  //   return;
  // };
  // USList = this.usListFunc();

  // sortUS = () => {
  //   this.state.value === 1
  //     ? this.USList.sort((a, b) => {
  //         return b.covidData.cases - a.covidData.cases;
  //       })
  //     : this.USList.sort((a, b) => {
  //         return b.covidData.deaths - a.covidData.deaths;
  //       });
  //   return this.USList;
  // };

  // countryListFunc = () => {
  //   this.state.countriesData.map((data) => {
  //     return (
  //       <StyledCard title={data.country}>
  //         <p>
  //           <span style={{ fontWeight: 300 }}>Cases: </span>
  //           {Number(data.cases).toLocaleString()}
  //         </p>
  //         <p>
  //           <span style={{ fontWeight: 300 }}>Deaths: </span>
  //           {Number(data.deaths).toLocaleString()}
  //         </p>
  //       </StyledCard>
  //     );
  //   });
  // };
  // globalList = this.countryListFunc();

  // sortGlobal = () => {
  //   this.state.value === 1
  //     ? this.globalList.sort((a, b) => {
  //         return b.countriesData.cases - a.countriesData.cases;
  //       })
  //     : this.globalList.sort((a, b) => {
  //         return b.countriesData.deaths - a.countriesData.deaths;
  //       });
  //   return this.globalList;
  // };

  // sortedUSList = this.sortUS();
  // sortedCountryList = this.sortGlobal();

  setValue = (data) => {
    this.setState({
      value: data,
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
      .then(this.sortUSCase)
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
    this.sortUSCase();
  };

  render() {
    const contextValues = {
      covidData: this.state.covidData || [],
      loading: this.state.loading,
      countriesData: this.state.countriesData,
      value: this.state.value,
      setValue: this.setValue,
      sortedGlobal: this.sortedCountryList,
      setCovidData: this.setCovidData,
      setCountriesData: this.setCountriesData,
      getCovidData: this.getCountriesData,
    };

    return (
      <AppContext.Provider value={contextValues}>
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
