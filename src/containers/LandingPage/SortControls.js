import React, { useContext } from 'react';
import { Radio } from 'antd';
import AppContext from '../../AppContext';
import styled from 'styled-components/macro';

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 10px;
  font-weight: 300;
  // width: 84%;
  color: #000;
  @media (min-width: 800px) {
    font-size: 22px;
    text-align: left;
    // width: 58%;
  }
`;

const Container = styled.div`
  display: flex;
  @media (min-width: 800px) {
    display: inline-flex;
  }
`;

export default function SortControls() {
  const context = useContext(AppContext);

  const sortGlobalDeath = () => {
    const data = context.countriesData.sort((a, b) => {
      return b.deaths - a.deaths;
    });
    context.setCountriesData(data);
  };

  const sortUSDeath = () => {
    const data = context.covidData.sort((a, b) => {
      return b.actuals.deaths - a.actuals.deaths;
    });
    context.setCovidData(data);
  };

  const sortGlobalCase = () => {
    const data = context.countriesData.sort((a, b) => {
      return b.cases - a.cases;
    });
    context.setCountriesData(data);
  };

  const sortUSCase = () => {
    const data = context.covidData.sort((a, b) => {
      return b.actuals.cases - a.actuals.cases;
    });
    context.setCovidData(data);
  };

  const sortGlobalAlpha = () => {
    const data = context.countriesData.sort((a, b) => {
      if (a.country < b.country) {
        return -1;
      }
      if (a.country > b.country) {
        return 1;
      }
      return 0;
    });

    context.setCountriesData(data);
  };

  const sortUSAlpha = () => {
    const data = context.covidData.sort((a, b) => {
      if (a.state < b.state) {
        return -1;
      }
      if (a.state > b.state) {
        return 1;
      }
      return 0;
    });
    context.setCovidData(data);
  };

  const onChange = async (e) => {
    context.setValue(e.target.value);
    // e === 2
    //   ? context.countriesData.sort((a, b) => {
    //       return b.countriesData.deaths - a.countriesData.deaths;
    //     }) &&
    //     context.covidData.sort((a, b) => {
    //       return b.covidData.actuals.deaths - a.covidData.actuals.deaths;
    //     })
    //   : context.countriesData.sort((a, b) => {
    //       return b.countriesData.cases - a.countriesData.cases;
    //     }) &&
    //     context.covidData.sort((a, b) => {
    //       return b.covidData.actuals.cases - a.covidData.actuals.cases;
    //     });

    // return context.countriesData;
    if (e.target.value === 2) sortGlobalDeath();
    if (e.target.value === 1) sortGlobalCase();
    if (e.target.value === 1) sortUSCase();
    if (e.target.value === 2) sortUSDeath();
    if (e.target.value === 3) sortGlobalAlpha();
    if (e.target.value === 3) sortUSAlpha();
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title>Sort by:</Title>
      <div>
        <Radio.Group onChange={onChange} value={context.value}>
          <Radio value={1}>Cases</Radio>
          <Radio value={2}>Deaths</Radio>
          <Radio value={3}>Alphabetical</Radio>
        </Radio.Group>
      </div>
    </Container>
  );
}
