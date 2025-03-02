import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export const Homepage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/car-listing'); 
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Car Rental Service</h1>
        <p className="home-subtitle">Find the best rental cars at affordable prices!</p>
        <div className="home-buttons">
          <button className="primary-btn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="secondary-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
