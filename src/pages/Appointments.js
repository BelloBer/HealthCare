// src/pages/Appointments.js
import React from 'react';
import Appointment from '../components/Appointment';
import Header from '../components/Header';

const Appointments = () => {
    const appointments = [
        { title: 'Doctor Visit', date: '2024-07-20' },
        { title: 'Dentist Appointment', date: '2024-08-15' },
    ];

    return (
        <div>
            <Header />
            <h1>Appointments</h1>
            {appointments.map((appointment, index) => (
                <Appointment key={index} appointment={appointment} />
            ))}
        </div>
    );
};

export default Appointments;

