import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import { Table, Row, Col } from 'antd';
import Loader from '../common/Loader/Loader';
import styled from 'styled-components/macro';
import { useIsSmallScreen } from '../common/responsiveComponents';

const StyleTable = styled(Table)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  @media (min-width: 900px) {
  }
`;

const PageContainer = styled(Row)`
  //   display: flex;
  //   align-items: center;
  //   width: 100%;
  //   flex-direction: column;
  //   margin-top: 30px;
  //   flex-wrap: wrap;
  //   background-color: rgb(27, 29, 30);

  display: flex;
  justify-content: center;
`;
const TableContainer = styled.div`
  width: 200px;
`;

export default function CountriesList() {
  const data = useContext(AppContext);
  const isSmallScreen = useIsSmallScreen();

  const columns = [
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    // {
    //   title: 'Population',
    //   dataIndex: 'population',
    //   defaultSortOrder: 'descend',
    //   sorter: (a, b) => a.population - b.population,
    // },

    {
      title: 'Cases',
      dataIndex: 'cases',
      key: 'cases',
      sorter: (a, b) => a.cases - b.cases,
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      key: 'deaths',
      sorter: (a, b) => a.deaths - b.deaths,
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      sorter: (a, b) => a.deaths - b.deaths,
      responsive: ['330px'],
    },
  ];

  const covidData = data.countriesData.map((data) => {
    return {
      country: data.country,
      cases: Number(data.cases).toLocaleString(),
      deaths: Number(data.deaths).toLocaleString(),
      active: Number(data.active).toLocaleString(),
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
            title={() => 'Global Coronavirus Data'}
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
