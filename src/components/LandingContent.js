// src/components/LandingContent.js
import React from 'react';
import styled from 'styled-components';
import Introduction from './Introduction';


const MainContainer = styled.main`
  box-sizing: border-box;
  text-align: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
`;

const Background = styled.div`
  background-image: url('/bg.jpg');  
  background-size: cover;
  background-position: center;
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.0); 
  padding: 2rem;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
`;


const LandingContent = () => {
    return (
        <MainContainer>
            <Background>
                <Overlay>
                    <Title>Welcome to Your Healthcare Portal</Title>
                    <Subtitle>Your one-stop solution for managing your health and appointments.</Subtitle>
                </Overlay>
            </Background>
            <Introduction/>
            

        </MainContainer>
    );
}

export default LandingContent;