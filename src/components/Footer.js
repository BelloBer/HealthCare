import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  width: 100%;
  padding: 10px;
  
`;

const Footer = () => {
  return (
    <Container className="footer">
      <p>&copy; 2024 Healthcare Portal. All rights reserved.</p>
    </Container>
  );
};

export default Footer;
