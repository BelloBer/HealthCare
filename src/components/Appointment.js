// src/components/Appointment.js
/*
import React from 'react';

const Appointment = ({ appointment }) => {
    return (
        <div>

            <div>
              <h3>{appointment.title}</h3>
              <p>{appointment.date}</p>
            </div>
        </div>
    );
};

export default Appointment;
*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
