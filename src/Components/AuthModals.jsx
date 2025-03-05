import React from 'react';
import './AuthModals.css';

export default function AuthModals({
  isLoginOpen,
  setLoginOpen,
  isSignupOpen,
  setSignupOpen,
}) {
  return (
    <>
      {isLoginOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Login</h2>
            <input type='email' placeholder='Email' className='input' />
            <input type='password' placeholder='Password' className='input' />
            <div className='modal-actions'>
              <button className='btn' onClick={() => setLoginOpen(false)}>
                Cancel
              </button>
              <button className='btn'>Login</button>
            </div>
          </div>
        </div>
      )}

      {isSignupOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Signup</h2>
            <input type='text' placeholder='Name' className='input' />
            <input type='email' placeholder='Email' className='input' />
            <input type='password' placeholder='Password' className='input' />
            <div className='modal-actions'>
              <button className='btn' onClick={() => setSignupOpen(false)}>
                Cancel
              </button>
              <button className='btn'>Signup</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
