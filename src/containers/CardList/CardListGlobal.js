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

  const list = context.countriesData.map((data) => {
    return (
      <StyledCard
        id={context.value === 1 ? context.cases : context.deaths}
        title={data.country}
      >
        <p>
          <span style={{ fontWeight: 300 }}>Cases: </span>
          {Number(data.cases).toLocaleString()}
        </p>
        <p>
          <span style={{ fontWeight: 300 }}>Deaths: </span>
          {Number(data.deaths).toLocaleString()}
        </p>
      </StyledCard>
    );
  });
  //   const newlist = [...list];

  // const sortGlobal = () => {
  //   data.value === 1
  //     ? newlist.sort((a, b) => {
  //         return b.data.countriesData.cases - a.data.countriesData.cases;
  //       })
  //     : newlist.sort((a, b) => {
  //         return b.data.countriesData.deaths - a.data.countriesData.deaths;
  //       });
  //   return newlist;
  // };

  return <div>{list}</div>;
}
