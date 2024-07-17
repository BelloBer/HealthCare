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
import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header/>
            <Routes>
                <Route path="/" exact element={<Dashboard/>} />
                <Route path="/appointments" element={<Appointments/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
