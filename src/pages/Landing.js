// src/pages/Landing.js
import React from 'react';
import LandingContent from '../components/LandingContent';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Landing = () => {
  return (
    <div className="home">
      <Header />
      <LandingContent/>
      <Footer/>
    </div>
    
  );
};

export default Landing;


