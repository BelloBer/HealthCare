// src/pages/Login.js
import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Container = styled.div `
    background: url(/dna4.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
`;

const Login = ({ onLogin }) => {
    return (
        <Container>
            <LoginForm onLogin={onLogin} />
        </Container>
    );
};

export default Login;
