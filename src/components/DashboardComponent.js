// src/components/DashboardComponent.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faHeartbeat, faNotesMedical, faUserMd } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-top: 2rem;
  .icon{
    margin-right: 5px;
  }

  .dashboard-cards{
    display: flex;
    
    flex-wrap: wrap;
  }

  .card {
    background: white;
    border-radius: 8px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
    padding: 1rem;
    text-align: center;
    width: 250px;
    margin: 1rem;
    
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

const DashboardComponent = () => {
  return (
    <Container className="dashboard">
      <SectionTitle><FontAwesomeIcon icon={faArrowAltCircleRight} className='icon' />Dashboard</SectionTitle>
      <div className="dashboard-cards">
        <div className="card">
          <FontAwesomeIcon icon={faHeartbeat} size="3x" />
          <h2>Health Stats</h2>
          <p>View your latest health statistics and records.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faNotesMedical} size="3x" />
          <h2>Medical History</h2>
          <p>Access your past medical records and documents.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faUserMd} size="3x" />
          <h2>Your Doctors</h2>
          <p>Find information about your healthcare providers.</p>
        </div>
      </div>
    </Container>
  );
};

export default DashboardComponent;
