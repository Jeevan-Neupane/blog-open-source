import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const CopyrightText = styled.p`
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightText>&copy; {new Date().getFullYear()} Your Blog</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;
