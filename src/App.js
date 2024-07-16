// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header/>
            <Routes>
                <Route path="/" exact component={Dashboard} />
                <Route path="/appointments" component={Appointments} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
