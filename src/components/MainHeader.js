// srcr/components/MainHeader.js

import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPerson, faQuestion } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 10px 10px 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: fixed;
  top: 0;
  width :100%;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  .icon {
    margin-right: 5px;
    }
`;

const MainHeader = () => {
    return(
        <Nav>
            <h1>Healthcare Portal</h1>
            <div>
                <NavLink to="/home"><FontAwesomeIcon className="icon" icon={faHome} />Home</NavLink>
                <NavLink to="/profile"><FontAwesomeIcon className="icon" icon={faPerson} />Profile</NavLink>
                <NavLink to="/help"><FontAwesomeIcon className="icon" icon={faQuestion} />Help</NavLink>
            </div>
        </Nav>
    );
}

export default MainHeader;