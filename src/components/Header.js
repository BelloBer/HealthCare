//src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
    return (
        <Nav>
            <h1>Healthcare Portal</h1>
            <div>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/appointments">Appointments</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </Nav>
    );
};

export default Header;

