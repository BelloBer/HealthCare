// src/components/Appointment.js
import React from 'react';

const Appointment = ({ appointment }) => {
    return (
        <div>
            <h2>Appointment</h2>
            <p>Manage your appointments here.</p>
            <div>
              <h3>{appointment.title}</h3>
              <p>{appointment.date}</p>
            </div>
        </div>
    );
};

export default Appointment;

