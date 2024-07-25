// src/components/MainHeader.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faQuestion, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Navbar from './Navbar';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 10px 10px 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    
    margin: 0 5.4px;
    }

  .icon {
    margin-right: 5px;

  }
`;

const Menu = styled.div`
  display: flex;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }

  .icon {
    color: white;
    font-size: 1.5rem;
    margin-right:8px;
  }
`;

const MainHeader = ({ onToggleNavbar }) => {
  return (
    <Nav>
      <h1>Healthcare Portal</h1>
      <Menu>
        <NavLink to="/home"><FontAwesomeIcon className="icon" icon={faHome} />Home</NavLink>
        <NavLink to="/profile"><FontAwesomeIcon className="icon" icon={faUser} />Profile</NavLink>
        <NavLink to="/help"><FontAwesomeIcon className="icon" icon={faQuestion} />Help</NavLink>
      </Menu>
      <Hamburger onClick={onToggleNavbar}>
        <FontAwesomeIcon icon={faBars} className="icon" />
      </Hamburger>
    </Nav>
  );
}

export default MainHeader;

