 // src/components/Introduction.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  padding: 2rem;
  text-align: left;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-top: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Arial', sans-serif;
`;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.primaryColor};
`;

const Text = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: ${(props) => props.theme.bodyFontColor};
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 1rem;
  
  
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-weight: bold;
`;

const NavLink = styled(Link)`
  
  height: 80%;
  
`;

const Background = styled.div`
   
  background-size: cover;
  background-position: center;
  position: relative;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;

  button{
    margin:9px;
    padding: 9px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.primaryColor};
    height: 100%;
    font-size: 1rem;
    color: white;
    border: none;

    &:hover{
      cursor: pointer;
      background: ${(props) => props.theme.secondaryColor};
    }
  }
  
  

`;



const Introduction = () => {

  return (
    <Container>
      <SectionTitle>Introduction to the Healthcare Portal</SectionTitle>
      <Text>
        Welcome to the <Highlight>Healthcare Portal</Highlight>, your comprehensive solution for managing all aspects of your health. Our portal is designed to provide you with the tools and resources needed to keep track of your medical appointments, health records, and more, all in one convenient location.
      </Text>
      <Text>
        Our mission is to empower you with easy access to your healthcare information, allowing you to make informed decisions about your health and wellness. We are committed to providing a user-friendly interface and a seamless experience, whether you are scheduling a routine checkup or accessing your medical history.
      </Text>
      <SectionTitle>Features and Benefits</SectionTitle>
      <List className='features'>
        <ListItem><Highlight>Appointments Management:</Highlight> Schedule, view, and manage your appointments with ease. Receive reminders and updates to ensure you never miss an important visit.</ListItem>
        
        <ListItem><Highlight>Health Records:</Highlight> Access your medical records securely. Keep track of your health history, test results, and other important documents.</ListItem>
        <ListItem><Highlight>Find Doctors and Hospitals:</Highlight> Discover the best healthcare providers near you. Filter by location, specialization, and more to find the perfect match for your needs.</ListItem>
        <ListItem><Highlight>Personalized Dashboard:</Highlight> Get a snapshot of your health at a glance. View your upcoming appointments, recent activities, and personalized health tips.</ListItem>
        <ListItem><Highlight>Secure and Private:</Highlight> Your data is safe with us. We adhere to the highest standards of security and privacy to protect your personal information.</ListItem>
      </List>
      <SectionTitle>How to Get Started</SectionTitle>
      
      <Text>
        Getting started with our Healthcare Portal is simple:
      </Text>
      <List>
        <ListItem><Highlight>Register:</Highlight> Create an account by providing your basic information.</ListItem>
        <ListItem><Highlight>Login:</Highlight> Access your personalized dashboard with your credentials.</ListItem>
        <ListItem><Highlight>Explore:</Highlight> Use the navigation bar to explore different sections of the portal, including your appointments, health records, and more.</ListItem>
      </List>
      <Background>
        <NavLink to="/register"><button>Create your Account now</button></NavLink>
        <NavLink to="/login"><button> Login to Access your portal</button></NavLink>  
      </Background>
      <Text>
        We are here to assist you every step of the way. If you have any questions or need support, our customer service team is available to help.
      </Text>
      
      <SectionTitle>Contact Us</SectionTitle>
      <Text>
        For any inquiries or assistance, feel free to reach out to us at <Highlight>support@healthcareportal.com</Highlight> or call us at <Highlight>1-800-123-4567</Highlight>.
      </Text>
      <Text>
        Thank you for choosing the Healthcare Portal. We look forward to serving you and helping you achieve your health and wellness goals.
      </Text>
    </Container>
  );
}

export default Introduction;
