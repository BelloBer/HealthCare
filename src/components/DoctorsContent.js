// src/components/DoctorsContent.js
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const doctorsData = [
  {
    name: "Dr. Maya Smith",
    specialization: "Cardiologist",
    hospital: "City Hospital",
    availability: "Monday - Friday, 9 AM - 5 PM",
    contactInfo: {
      phone: "123-456-7890",
      email: "john.smith@example.com",
      officeAddress: "123 Main St, Cityville"
    },
    image: "doc1.jpg"
  },
  {
    name: "Dr. Alex Johnson",
    specialization: "Neurologist",
    hospital: "General Hospital",
    availability: "Tuesday - Thursday, 10 AM - 4 PM",
    contactInfo: {
      phone: "987-654-3210",
      email: "emily.johnson@example.com",
      officeAddress: "456 Elm St, Townsville"
    },
    image: "doc2.jpg"
  },

  {
    name: "Dr. John Johnson",
    specialization: "Neurologist",
    hospital: "General Hospital",
    availability: "Tuesday - Thursday, 10 AM - 4 PM",
    contactInfo: {
      phone: "987-654-3210",
      email: "emily.johnson@example.com",
      officeAddress: "456 Elm St, Townsville"
    },
    image: "doc3.jpg"
  },

  {
    name: "Dr. Adam Doe",
    specialization: "Neurologist",
    hospital: "General Hospital",
    availability: "Tuesday - Thursday, 10 AM - 4 PM",
    contactInfo: {
      phone: "987-654-3210",
      email: "emily.johnson@example.com",
      officeAddress: "456 Elm St, Townsville"
    },
    image: "doc4.jpg"
  },

  {
    name: "Dr. Emily Johnson",
    specialization: "Neurologist",
    hospital: "General Hospital",
    availability: "Tuesday - Thursday, 10 AM - 4 PM",
    contactInfo: {
      phone: "987-654-3210",
      email: "emily.johnson@example.com",
      officeAddress: "456 Elm St, Townsville"
    },
    image: "doc5.jpg"
  },

  {
    name: "Dr. Tyler Brown",
    specialization: "Neurologist",
    hospital: "General Hospital",
    availability: "Tuesday - Thursday, 10 AM - 4 PM",
    contactInfo: {
      phone: "987-654-3210",
      email: "emily.johnson@example.com",
      officeAddress: "456 Elm St, Townsville"
    },
    image: "doc6.jpg"
  },
  // More doctors below
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 2rem;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-top: 2rem;
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const IntroImage = styled(LazyLoadImage)`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
  margin: 5px auto;
  padding-bottom: 8px;
  max-width: 800px;
  border-bottom: 1px solid blue;
`;

const DoctorCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border-radius: 8px;
  margin-bottom: 2rem;
  width: 95%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const DoctorImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
`;

const DoctorInfo = styled.div`
  padding: 1.1rem;
  flex: 1;
`;

const DoctorName = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.primaryColor};
`;

const DoctorSpecialization = styled.p`
  margin: 0.5rem 0;
  font-weight: bold;
`;

const DoctorDetails = styled.p`
  margin: 0.5rem 0;
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  margin: 0.3rem 0;

  svg {
    margin-right: 0.5rem;
  }
`;

const MessageButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
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

const DoctorsContent = () => {
  return (
    <Container>
      <SectionTitle>Meet and interact with your Doctors</SectionTitle>
      <IntroSection>
        <IntroImage src="/docs.jpg" alt="Doctors working together" />
        <IntroText>Welcome to our doctors page. Here, you can find detailed information about our esteemed medical professionals, including their specializations, availability, and contact details. Feel free to reach out to them for your healthcare needs.</IntroText>
      </IntroSection>
      {doctorsData.map((doctor, index) => (
        <DoctorCard key={index}>
          <DoctorImage src={doctor.image} 
            alt={`Picture of ${doctor.name}`}
            effect="blur" />
          <DoctorInfo>
            <DoctorName>{doctor.name}</DoctorName>
            <DoctorSpecialization>{doctor.specialization}</DoctorSpecialization>
            <DoctorDetails>Hospital: {doctor.hospital}</DoctorDetails>
            <DoctorDetails>Availability: {doctor.availability}</DoctorDetails>
            <ContactInfo>
              <ContactItem><FaPhone /> {doctor.contactInfo.phone}</ContactItem>
              <ContactItem><FaEnvelope /> {doctor.contactInfo.email}</ContactItem>
              <ContactItem><FaMapMarkerAlt /> {doctor.contactInfo.officeAddress}</ContactItem>
            </ContactInfo>
            <MessageButton>Message</MessageButton>
          </DoctorInfo>
        </DoctorCard>
      ))}
    </Container>
  );
};

export default DoctorsContent;
