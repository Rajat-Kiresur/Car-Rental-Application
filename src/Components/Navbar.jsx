import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Dream Drive</Link>
      <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/car-listing" className="navbar-link">Car Listing</Link>
      <Link to="/user-info" className="navbar-link">User Info</Link>
      <Link to="/rental-details" className="navbar-link">Rental Details</Link>
      <Link to="/contact-us" className="navbar-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
