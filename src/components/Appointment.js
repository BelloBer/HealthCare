// src/components/Appointment.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  text-align: center;
  width: 250px;
  margin: 1rem;
`;

const Appointment = ({ appointment }) => {
    return (
        <Card>
            <FontAwesomeIcon icon={appointment.icon} size="3x" />
            <h3>{appointment.title}</h3>
            <p>{appointment.date}</p>
        </Card>
    );
};

export default Appointment;
