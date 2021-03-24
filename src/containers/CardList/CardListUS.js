import React, { useContext } from 'react';
import { Card, Divider } from 'antd';
import AppContext from '../../AppContext';
import styled from 'styled-components/macro';

const StyledCard = styled(Card)`
  width: 320px;
  margin-top: 10px;
  @media (min-width: 760px) {
    width: 450px;
  }
`;

export default function CardListUS() {
  const context = useContext(AppContext);

  const list = context.covidData.map((data) => {
    return (
      <StyledCard key={data.fips} title={data.state}>
        <div>
          <span style={{ fontWeight: 350 }}>Cases: </span>
          <span style={{ fontWeight: 300 }}>
            {Number(data.actuals.cases).toLocaleString()}
          </span>
        </div>
        <Divider></Divider>

        <div>
          <span style={{ fontWeight: 350 }}>Deaths: </span>
          <span style={{ fontWeight: 300 }}>
            {Number(data.actuals.deaths).toLocaleString()}
          </span>
        </div>

        <Divider></Divider>

        <div>
          <span style={{ fontWeight: 350 }}>Population: </span>
          <span style={{ fontWeight: 300 }}>
            {Number(data.population).toLocaleString()}
          </span>
        </div>
      </StyledCard>
    );
  });

  //   const newlist = [...list];

  //   const sortUS = () => {
  //     context.value === 1
  //       ? newlist.sort((a, b) => {
  //           return b.context.covidData.cases - a.context.covidData.cases;
  //         })
  //       : newlist.sort((a, b) => {
  //           return b.context.covidData.deaths - a.context.covidData.deaths;
  //         });
  //     return newlist;
  //   };

  return <div>{list}</div>;
}
