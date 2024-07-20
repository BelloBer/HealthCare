// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyMedical, faCalendarAlt, faSignOutAlt, faHospital} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Sidebar = styled.nav`
    margin-top: 90px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`;

const SidebarLink = styled(Link)`
    width: 84%;
    padding: 20px 20px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    &:hover {
        background: ${(props) => props.theme.secondaryColor};
    }

    .icon {
    margin-right: 10px;
    }
`;

const SidebarButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    color: #fff;
    background: none;
    border: none;
    text-align: left;
    display: flex;
    align-items: center;
    &:hover {
        background: ${(props) => props.theme.secondaryColor};
    }
`;

const Navbar = ({ onLogout }) => {
    return (
        <Sidebar>
            <SidebarLink to="/dashboard">
                <FontAwesomeIcon icon={faHouseChimneyMedical} className='icon' /> Dashboard
            </SidebarLink>
            <SidebarLink to="/appointments">
                <FontAwesomeIcon icon={faCalendarAlt} className='icon' /> Appointments
            </SidebarLink>
            <SidebarLink to="/hospitals">
                <FontAwesomeIcon icon={faHospital} className='icon' /> Hospitals
            </SidebarLink>
            <SidebarButton onClick={onLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className='icon' /> Logout
            </SidebarButton>
        </Sidebar>
    );
};

export default Navbar;
