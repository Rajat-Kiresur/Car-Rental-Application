import React, { useState } from 'react';
import './HomePage.css';
import AuthModals from '../AuthModals';

export const Homepage = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleSignupClick = () => {
    setSignupOpen(true);
  };

  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1 className='home-title'>Welcome to Car Rental Service</h1>
        <p className='home-subtitle'>Find the best rental cars at affordable prices!</p>
        <div className='home-buttons'>
          <button className='primary-btn' onClick={handleLoginClick}>
            Login
          </button>
          <button className='secondary-btn' onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Use AuthModals with existing buttons' effects */}
      <AuthModals
        isLoginOpen={isLoginOpen}
        setLoginOpen={setLoginOpen}
        isSignupOpen={isSignupOpen}
        setSignupOpen={setSignupOpen}
      />
    </div>
  );
};
