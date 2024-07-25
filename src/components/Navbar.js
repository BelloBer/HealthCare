// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyMedical, faSignOutAlt, faHospital, faGear, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { faUserMd } from '@fortawesome/free-solid-svg-icons/faUserMd';

const Sidebar = styled.nav`
  margin-top: 90px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 230px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    width: 50%;
    height: auto;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const SidebarLink = styled(Link)`
  width: 82%;
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
  padding: 20px 20px;
  color: #fff;
  background: none;
  border: none;
  text-align: left;
  display: flex;
  align-items: center;
  &:hover {
    background: ${(props) => props.theme.secondaryColor};
  }
  .icon {
    margin-right: 10px;
  }
`;

const Navbar = ({ onLogout, isOpen }) => {
  return (
    <Sidebar isOpen={isOpen}>
      <SidebarLink to="/dashboard">
        <FontAwesomeIcon icon={faHouseChimneyMedical} className='icon' /> Dashboard
      </SidebarLink>
      <SidebarLink to="/appointments">
        <FontAwesomeIcon icon={faClock} className='icon' /> Appointments
      </SidebarLink>
      <SidebarLink to="/doctors">
        <FontAwesomeIcon icon={faUserMd} className='icon' /> Doctors
      </SidebarLink>
      <SidebarLink to="/hospitals">
        <FontAwesomeIcon icon={faHospital} className='icon' /> Hospitals
      </SidebarLink>
      <SidebarLink to="/messages">
        <FontAwesomeIcon icon={faEnvelope} className='icon' /> Messages
      </SidebarLink>
      <SidebarLink to="/settings">
        <FontAwesomeIcon icon={faGear} className='icon' /> Settings
      </SidebarLink>
      <SidebarButton onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className='icon' /> Logout
      </SidebarButton>
    </Sidebar>
  );
};

export default Navbar;

