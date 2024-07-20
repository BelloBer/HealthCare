// src/App.js
import React, { useState } from 'react';
import { Route, Routes, useLocation, Navigate  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Hospitals from './components/Hospitals';
import Login from './pages/Login';
import Logout from './components/Logout';
import Register from './pages/Register';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import './App.css';



function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
     setIsLoggedIn(true);
     };

    const handleLogout = () => {
     setIsLoggedIn(false);
     };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            
            {isLoggedIn ? (
                <div className='app-layout'>
                    <MainHeader />
                    <Navbar onLogout={handleLogout} />
                    <div className='main-content'>
                        <Routes>
                            <Route path="/" exact element={<Landing/>} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/Dashboard" element={<Dashboard/>} />
                            <Route path="/appointments" element={<Appointments/>} />
                            <Route path="/hospitals" element={<Hospitals/>} />
                            <Route path="/register" element={<Register/>} />
                            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                        </Routes>
                    </div>
                    
                </div>
            ) : (
                <div>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Landing/>} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer/>
                </div>
            )}

            
            
        </ThemeProvider>
    );
}

export default App;



/*
const App = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';
  
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {isLandingPage ? <Header /> : <MainHeader />}
        <div style={{ display: 'flex' }}>
          {!isLandingPage && <Navbar />}
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/login" element={<Login  />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    );
  };

  export default App;
*/

/*
const App = () => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const isLandingPage = location.pathname === '/';
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {isLandingPage ? <Header /> : <MainHeader />}
            <div style={{ display: 'flex' }}>
                {!isLandingPage && !isAuthPage && <Navbar onLogout={handleLogout} />}
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" exact element={<Landing />} />
                        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/dashboard" />} />
                        <Route path="/appointments" element={isLoggedIn ? <Appointments /> : <Navigate to="/appointments" />} />
                        <Route path="/hospitals" element={isLoggedIn ? <Hospitals /> : <Navigate to="/hospitals" />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default App;

*/