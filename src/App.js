// src/App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Hospitals from './components/Hospitals';
import Doctors from './pages/Doctors';
import Profile from './components/Profile';
import Help from './components/Help';
import Login from './pages/Login';
import Logout from './components/Logout';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Home from './pages/Home';
import './App.css';
import Settings from './components/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      {isLoggedIn ? (
        <div className='app-layout'>
          <MainHeader onToggleNavbar={toggleNavbar} />
          <Navbar onLogout={handleLogout} isOpen={isNavbarOpen} />
          <div className='main-content'>
            <Routes>
              <Route path="/" exact element={<Landing/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/Dashboard" element={<Dashboard/>} />
              <Route path="/appointments" element={<Appointments/>} />
              <Route path="/hospitals" element={<Hospitals/>} />
              <Route path="/doctors" element={<Doctors/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/help" element={<Help/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" exact element={<Landing/>} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
