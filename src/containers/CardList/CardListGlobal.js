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

export default function CardListGlobal() {
  const context = useContext(AppContext);

  const list = context.countriesData.map((data) => {
    return (
      <StyledCard key={data.country} title={data.country}>
        <div>
          <span style={{ fontWeight: 350 }}>Cases: </span>
          <span style={{ fontWeight: 300 }}>
            {Number(data.cases).toLocaleString()}
          </span>
          {data.todayCases !== 0 ? (
            <>
              <Divider type="vertical" />

              <span style={{ fontWeight: 350 }}>Today: </span>
              <span style={{ fontWeight: 300 }}>
                {Number(data.todayCases).toLocaleString()}
              </span>
            </>
          ) : (
            ''
          )}

          <Divider></Divider>
        </div>
        <div>
          <span style={{ fontWeight: 350 }}>Deaths: </span>
          <span style={{ fontWeight: 300 }}>
            {Number(data.deaths).toLocaleString()}
          </span>

          {data.todayDeaths !== 0 ? (
            <>
              <Divider type="vertical" />

              <span style={{ fontWeight: 350 }}>Today: </span>
              <span style={{ fontWeight: 300 }}>
                {Number(data.todayDeaths).toLocaleString()}
              </span>
            </>
          ) : (
            ''
          )}
        </div>
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
