// src/components/DashboardComponent.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faNotesMedical, faUserMd } from '@fortawesome/free-solid-svg-icons';

const DashboardComponent = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
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
    </div>
  );
};

export default DashboardComponent;
