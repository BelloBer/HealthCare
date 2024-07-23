// src/pages/Home.js
import React from "react";
import styled from 'styled-components';
import { FaRegNewspaper, FaRegSmile, FaHospital } from 'react-icons/fa';

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

const AnnouncementsSection = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const Announcement = styled.div`
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.primaryColor};
  margin-right: 1rem;
`;

const WelcomeSection = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
`;

const ImageWrapper = styled.div`
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const Home = () => {
    return (
        <Container>
            <SectionTitle>Welcome </SectionTitle>
            <WelcomeSection>
                <IconWrapper>
                    <FaRegSmile />
                </IconWrapper>
                <p>Welcome to our healthcare portal! Here, you can manage your appointments, check the latest announcements from your doctors or hospitals, and stay updated with your healthcare journey.</p>
                <ImageWrapper>
                    <img src="patient.jpg" alt="A happy patient" />
                </ImageWrapper>
            </WelcomeSection>
            <AnnouncementsSection>
                <SectionTitle><FaRegNewspaper /> Announcements</SectionTitle>
                <Announcement>
                    <IconWrapper>
                        <FaHospital />
                    </IconWrapper>
                    <p>Dr. Smith will be available for consultations every Monday and Wednesday from 10 AM to 2 PM.</p>
                </Announcement>
                <Announcement>
                    <IconWrapper>
                        <FaHospital />
                    </IconWrapper>
                    <p>Our hospital is introducing a new telemedicine service starting next month. Stay tuned for more details!</p>
                </Announcement>
                <ImageWrapper>
                    <img src="announce.jpg" alt="A doctor making an announcement" />
                </ImageWrapper>
            </AnnouncementsSection>
        </Container>
    );
};

export default Home;
