import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar-logo'>Dream Drive</NavLink>
      <div className='navbar-links'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/car-listing'
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }
        >
          Car Listing
        </NavLink>
        <NavLink
          to='/user-info'
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }
        >
          User Info
        </NavLink>
        <NavLink
          to='/rental-details'
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }
        >
          Rental Details
        </NavLink>
        <NavLink
          to='/contact-us'
          className={({ isActive }) =>
            isActive ? 'navbar-link active' : 'navbar-link'
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
