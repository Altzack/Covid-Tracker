import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import { Table } from 'antd';
import Loader from '../common/Loader/Loader';
import styled from 'styled-components/macro';

const StyleTable = styled(Table)`
  display: flex;
  justify-content: center;
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
  flex-wrap: wrap;
  background-color: rgb(27, 29, 30);
  @media (min-width: 900px) {
    margin-top: 90px;
  }
`;

export default function List() {
  const data = useContext(AppContext);

  const columns = [
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Cases',
      dataIndex: 'cases',
      key: 'cases',
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      key: 'deaths',
    },
  ];

  const covidData = data.covidData.map((data) => {
    return {
      key: data.fips,
      state: data.state,
      cases: Number(data.actuals.cases).toLocaleString(),
      deaths: Number(data.actuals.deaths).toLocaleString(),
    };
  });

  //   render() {

  //     const list = this.context.covidData.map((data) => {
  //       return (
  //         <Container>
  //           <h1>{data.state} </h1>
  //           <div>
  //             <h2>Cases: {Number(data.actuals.cases).toLocaleString()}</h2>
  //           </div>
  //           <div>
  //             <h2>Deaths: {Number(data.actuals.deaths).toLocaleString()}</h2>
  //           </div>
  //         </Container>
  //       );
  //     });

  return (
    <PageContainer>
      {data.loading ? (
        <div style={{ marginTop: 100 }}>
          <Loader />
        </div>
      ) : (
        ''
      )}
      {/* {this.context.covidData.length !== 0 ? ( */}
      <StyleTable pagination={10} columns={columns} dataSource={covidData} />
      {/* ) : (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ padding: 10, color: '#fff' }}>No data found </h1>
          </div>
        )} */}
    </PageContainer>
  );
}
