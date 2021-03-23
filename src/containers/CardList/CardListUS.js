import React, { useContext } from 'react';
import { Card } from 'antd';
import AppContext from '../../AppContext';
import styled from 'styled-components/macro';

const StyledCard = styled(Card)`
  width: 300px;
  margin-top: 10px;
  @media (min-width: 760px) {
    width: 450px;
  }
`;

export default function CardListUS() {
  const context = useContext(AppContext);

  const list = context.covidData.map((data) => {
    return (
      <StyledCard title={data.state}>
        <p>
          <span style={{ fontWeight: 300 }}>Cases: </span>
          {Number(data.actuals.cases).toLocaleString()}
        </p>
        <p>
          <span style={{ fontWeight: 300 }}>Deaths: </span>
          {Number(data.actuals.deaths).toLocaleString()}
        </p>
      </StyledCard>
    );
  });
  return <div>{list}</div>;
}