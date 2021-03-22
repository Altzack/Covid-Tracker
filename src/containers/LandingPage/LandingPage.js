import React from 'react';
import List from '../List/List';
import CountriesList from '../CountriesList/CountriesList';
import styled from 'styled-components/macro';
import { Divider } from 'antd';
import { SmallScreenOnly } from '../common/responsiveComponents';

const LandingContainer = styled.div`
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 10px;
  font-weight: 350;
  width: 84%;
  color: green;
  @media (min-width: 800px) {
    font-size: 25px;
    text-align: center;
    width: 58%;
  }
`;

export default function LandingPage() {
  return (
    <>
      <Title>Daily updated COVID-19 data</Title>

      <LandingContainer>
        <div>
          <List />
        </div>
        <SmallScreenOnly>
          <Divider />
        </SmallScreenOnly>
        <div>
          <CountriesList />
        </div>
      </LandingContainer>
    </>
  );
}
