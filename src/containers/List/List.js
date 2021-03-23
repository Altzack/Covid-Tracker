import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import { Table, Row, Col } from 'antd';
import Loader from '../common/Loader/Loader';
import styled from 'styled-components/macro';
import { useIsSmallScreen } from '../common/responsiveComponents';

const StyleTable = styled(Table)`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  @media (min-width: 900px) {
  }
`;

const PageContainer = styled(Row)`
  //   display: flex;
  //   align-items: center;
  //   width: 100%;
  //   flex-direction: column;
  //   flex-wrap: wrap;
  //   background-color: rgb(27, 29, 30);

  display: flex;
  justify-content: center;
`;
const TableContainer = styled.div`
  width: 200px;
`;

export default function List() {
  const data = useContext(AppContext);
  const isSmallScreen = useIsSmallScreen();

  const columns = [
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    // {
    //   title: 'Population',
    //   dataIndex: 'population',
    //   defaultSortOrder: 'descend',
    //   key: 'population',
    //   sorter: (a, b) =>
    //     parseInt(a.population.toString().replace(/[, ]+/g, ' ').trim()) -
    //     parseInt(b.population.toString().replace(/[, ]+/g, ' ').trim()),
    // },

    {
      title: 'Cases',
      dataIndex: 'cases',
      key: 'cases',
      defaultSortOrder: 'descend',
      sorter: (a, b) =>
        parseInt(a.cases.toString().replace(/[, ]+/g, ' ').trim()) -
        parseInt(b.cases.toString().replace(/[, ]+/g, ' ').trim()),
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      key: 'deaths',
      defaultSortOrder: 'descend',
      sorter: (a, b) =>
        parseInt(a.deaths.toString().replace(/[, ]+/g, ' ').trim()) -
        parseInt(b.deaths.toString().replace(/[, ]+/g, ' ').trim()),
    },
  ];

  const covidData = data.covidData.map((data) => {
    return {
      key: data.fips,
      state: data.state,
      population: Number(data.population).toLocaleString(),
      cases: Number(data.actuals.cases).toLocaleString(),
      deaths: Number(data.actuals.deaths).toLocaleString(),
    };
  });

  //   function onChange(pagination, filters, sorter, extra) {
  //     console.log('params', pagination, filters, sorter, extra);
  //   }

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
      <Col>
        <TableContainer>
          <StyleTable
            pagination={{ position: ['bottomCenter'] }}
            columns={columns}
            dataSource={covidData}
            size={isSmallScreen ? 'small' : 'large'}
            tableLayout="auto"
            title={() => 'United States Coronavirus Data'}
            bordered
          />
        </TableContainer>
      </Col>
      {/* ) : (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ padding: 10, color: '#fff' }}>No data found </h1>
          </div>
        )} */}
    </PageContainer>
  );
}
