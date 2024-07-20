// src/pages/Home.js
import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-top: 2rem;
  
`;

const Background = styled.div`
  background-image: url('/injection.jpg');  
  background-size: cover;
  background-position: center;
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  
`;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.primaryColor};
`;

const Home = () =>{
    return(
        <Container>
        <SectionTitle>homeContentToBeFilled</SectionTitle>
        <Background></Background>
        </Container>
    );
}

export default Home;