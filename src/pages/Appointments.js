// src/pages/Appointments.js
import React from 'react';
import Appointment from '../components/Appointment';
import { faCalendarCheck, faClock, faCalendarPlus, faUserMd, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import './Appointments.css'; // Create a corresponding CSS file for styling
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-top: 2rem;
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

const appointments = [
    { title: 'Doctor Visit', date: '2024-07-20', icon: faUserMd },
    { title: 'Dentist Appointment', date: '2024-08-15', icon: faStethoscope },
    { title: 'Eye Checkup', date: '2024-09-10', icon: faCalendarCheck },
    { title: 'Physiotherapy', date: '2024-10-05', icon: faClock },
    { title: 'New Appointment', date: '2024-11-15', icon: faCalendarPlus },
];

const Appointments = () => {
    return (
        <Container className="appointments">
            <SectionTitle>Appointments</SectionTitle>
            <h3>Manage your appointments here</h3>
            <div className="appointments-cards">
                {appointments.map((appointment, index) => (
                    <Appointment key={index} appointment={appointment} />
                ))}
            </div>
        </Container>
    );
};

export default Appointments;
