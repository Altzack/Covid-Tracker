import styled from 'styled-components/macro';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { RiVirusFill } from 'react-icons/ri';
import { BigScreenOnly, SmallScreenOnly } from './responsiveComponents';
import 'antd/dist/antd.css';
import '../../App.css';

const AppHeaderContainer = styled.div`
  padding: 8px 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  min-height: 60px;
  position: fixed;
  width: 100vw;
  font-family: Rubik;
  z-index: 99;
  /*background-color: #ff294a;*/
  color: #000;
  background-color: #eee;
`;

const FooterSeparator = styled.span`
  padding: 0 10px;
  margin-top: 2px;
  color: #364966;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  color: #000;
`;

const HeaderContentContainer = styled.div`
  font-family: Roboto Condensed;
  font-weight: 500;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`;

const StyledHeader = styled.h3`
  color: #000;
  margin-bottom: 0;
  :hover {
    color: #1890ff;
  }
`;

const StyledTitle = styled.div`
  color: #000;
  align-items: center;
  font-size: 25px;
`;

const LogoLink = styled(Link)`
  justify-self: center;
  align-self: center;
  color: #364966;
  font-size: 15px;
`;

export default function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <AppHeaderContainer>
      <BigScreenOnly>
        <HeaderContentContainer>
          <HeaderSection style={{ justifyContent: 'flex-start' }}>
            <Link style={{ textDecoration: 'none', color: '#000' }} to="/">
              <StyledHeader></StyledHeader>
            </Link>
            <FooterSeparator></FooterSeparator>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'center', width: '70%' }}>
            <LogoLink
              to="/"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <StyledTitle>Covid Tracker</StyledTitle>
              <StyledTitle>
                <RiVirusFill
                  style={{ marginTop: 12, marginLeft: 8, color: 'green' }}
                />
              </StyledTitle>
            </LogoLink>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'flex-end' }}></HeaderSection>
        </HeaderContentContainer>
      </BigScreenOnly>
      <SmallScreenOnly>
        <HeaderContentContainer>
          <HeaderSection style={{ justifyContent: 'flex-start' }}>
            <Button
              style={{
                borderColor: 'transparent',
                backgroundColor: 'transparent',
                color: '#364966',
              }}
              ype="text"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </Button>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'center', width: '100%' }}>
            <LogoLink
              to="/"
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <StyledTitle style={{ fontSize: 17 }}>Covid Tracker</StyledTitle>
              <StyledTitle>
                <RiVirusFill
                  style={{ marginTop: 12, marginLeft: 8, color: 'green' }}
                />
              </StyledTitle>
            </LogoLink>
          </HeaderSection>
          <HeaderSection style={{ justifyContent: 'flex-end' }}></HeaderSection>
        </HeaderContentContainer>
        <Drawer
          placement="left"
          closable="true"
          onClose={onClose}
          visible={visible}
          key="AppHeader-left-drawer"
        >
          <Link
            onClick={onClose}
            style={{ textDecoration: 'none', color: '#000' }}
            to="/"
          >
            <h3>Home</h3>
          </Link>
          <Link
            onClick={onClose}
            style={{ textDecoration: 'none', color: '#000' }}
            to="/"
          >
            {/* <h3>Blah</h3> */}
          </Link>
        </Drawer>
      </SmallScreenOnly>
    </AppHeaderContainer>
  );
}
