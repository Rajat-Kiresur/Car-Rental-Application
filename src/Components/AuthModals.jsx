import React, { useState } from 'react';
import './AuthModals.css';

export default function AuthModals() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const toggleLogin = () => setLoginOpen(!isLoginOpen);
  const toggleSignup = () => setSignupOpen(!isSignupOpen);

  return (
    <div className='auth-buttons'>
      <button className='btn' onClick={toggleLogin}>Login</button>
      <button className='btn' onClick={toggleSignup}>Signup</button>

      {isLoginOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Login</h2>
            <input type='email' placeholder='Email' className='input'/>
            <input type='password' placeholder='Password' className='input'/>
            <div className='modal-actions'>
              <button className='btn' onClick={toggleLogin}>Cancel</button>
              <button className='btn'>Login</button>
            </div>
          </div>
        </div>
      )}

      {isSignupOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Signup</h2>
            <input type='text' placeholder='Name' className='input'/>
            <input type='email' placeholder='Email' className='input'/>
            <input type='password' placeholder='Password' className='input'/>
            <div className='modal-actions'>
              <button className='btn' onClick={toggleSignup}>Cancel</button>
              <button className='btn'>Signup</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
