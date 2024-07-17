// src/pages/Appointments.js
/*
import React from 'react';
import Appointment from '../components/Appointment';

const Appointments = () => {
    const appointments = [
        { title: 'Doctor Visit', date: '2024-07-20' },
        { title: 'Dentist Appointment', date: '2024-08-15' },
    ];

    return (
        <div>
            <h1>Appointments</h1>
            <h4>Manage your appointments here</h4>
            {appointments.map((appointment, index) => (
                <Appointment key={index} appointment={appointment} />
            ))}
        </div>
    );
};

export default Appointments;

*/


import React from 'react';
import Appointment from '../components/Appointment';
import { faCalendarCheck, faClock, faCalendarPlus, faUserMd, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import './Appointments.css'; // Create a corresponding CSS file for styling

const appointments = [
    { title: 'Doctor Visit', date: '2024-07-20', icon: faUserMd },
    { title: 'Dentist Appointment', date: '2024-08-15', icon: faStethoscope },
    { title: 'Eye Checkup', date: '2024-09-10', icon: faCalendarCheck },
    { title: 'Physiotherapy', date: '2024-10-05', icon: faClock },
    { title: 'New Appointment', date: '2024-11-15', icon: faCalendarPlus },
];

const Appointments = () => {
    return (
        <div className="appointments">
            <h1>Appointments</h1>
            <h4>Manage your appointments here</h4>
            <div className="appointments-cards">
                {appointments.map((appointment, index) => (
                    <Appointment key={index} appointment={appointment} />
                ))}
            </div>
        </div>
    );
};

export default Appointments;
