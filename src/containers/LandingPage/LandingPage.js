import React, { useState } from 'react';
// import List from '../List/List';
// import CountriesList from '../CountriesList/CountriesList';
import styled from 'styled-components/macro';
import { Divider, Button } from 'antd';
// import AppContext from '../../AppContext';
import CardListUS from '../CardList/CardListUS';
import CardListGlobal from '../CardList/CardListGlobal';

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
  // width: 84%;
  color: green;
  @media (min-width: 800px) {
    font-size: 25px;
    text-align: center;
    // width: 58%;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  // width: calc(100% - 200px);
  padding: 5px;
  // @media (min-width: 800px) {
  //   width: 58%;
  // }
`;

// const Button = styled.button`
//   padding: 10px 15px;
//   cursor: pointer;
//   border-width: 1px;
//   border-radius: 2px;
//   font-size: 14px;
//   font-weight: 400;
//   color: #28a745;
//   box-shadow: rgb(0 0 0 / 12%) 0px 10px 20px -6px;
//   border-color: #28a745;
//   width: 60px;
//   background-color: transparent;
// `;

export default function LandingPage() {
  // const context = useContext(AppContext);
  const [visible, setVisible] = useState('Global');
  return (
    <>
      {visible === 'US' ? (
        <>
          <Title>United States Covid Data</Title>
          <ButtonContainer>
            <Button
              style={{ marginRight: 10 }}
              onClick={() => setVisible('Global')}
            >
              Global
            </Button>
            <Button disabled>United States</Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <Title>Global Covid Data</Title>
          <ButtonContainer>
            <Button style={{ marginRight: 10 }} disabled>
              Global
            </Button>
            <Button onClick={() => setVisible('US')}>United States</Button>
          </ButtonContainer>
        </>
      )}

      {/* // <ButtonContainer>
      //   <Button
      //     onClick={context.setVisible('US')}
      //     style={{ marginRight: 10 }}
      //     disabled
      //   >
      //     US
      //   </Button>
      //   <Button onClick={context.setVisible('Global')}>Global</Button>
      // </ButtonContainer> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
          <Divider style={{}} />
        </div>
      </div>

      <LandingContainer>
        {visible === 'Global' ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardListGlobal />
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardListUS />
          </div>
        )}
        {/* <SmallScreenOnly>
          <Divider />
        </SmallScreenOnly> */}
      </LandingContainer>
    </>
  );
}
