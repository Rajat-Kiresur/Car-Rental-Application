import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Homepage } from './Components/Pages/Homepage';
import CarListing from './Components/Pages/CarListing';
import ContactUs from './Components/ContactUs';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import UserInfo from './Components/Pages/UserInfo';
import RentalDetails from './Components/Pages/RentalDetails';
import AuthModals from './Components/AuthModals';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/car-listing' element={<CarListing />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/user-info' element={<UserInfo />} />
          <Route path='/rental-details' element={<RentalDetails />} />
        </Routes>
        <AuthModals />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
