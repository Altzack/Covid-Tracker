import React from 'react';
import styled from 'styled-components/macro';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { SmallScreenOnly, useIsSmallScreen } from './responsiveComponents';

const FooterSeparator = styled.span`
  padding: 0 10px;
`;

const FooterContainer = styled.div`
  width: 100%;
  color: #000;
  margin-top: 48px;
  background-color: #eee;
`;

const FooterContentContainer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  min-height: 64px;
  ${({ mobile }) => mobile && 'flex-direction: column; padding: 24px 0px'}
`;

export default function Footer() {
  const isSmallScreen = useIsSmallScreen();

  return (
    <FooterContainer>
      <FooterContentContainer mobile={isSmallScreen}>
        <div>
          Covid Stats
          <FooterSeparator>|</FooterSeparator>
          Created by <i>Zack 2020</i>
        </div>
        <SmallScreenOnly>
          <br />
        </SmallScreenOnly>
        <div>
          <a href="https://github.com/Altzack">
            <FaGithub size="25px" style={{ marginRight: 15 }} />
          </a>
          <a href="https://www.linkedin.com/in/zack-altschuler">
            <FaLinkedin size="25px" style={{ marginRight: 15 }} />
          </a>
          <a href="mailto:altschulerzack@yahoo.com">
            <FaTelegramPlane size="25px" style={{ marginRight: 15 }} />
          </a>
        </div>
      </FooterContentContainer>
    </FooterContainer>
  );
}
