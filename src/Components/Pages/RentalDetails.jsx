import React, { useState } from 'react';
import './RentalDetails.css';

const RentalDetails = () => {
  const [rentalDetails] = useState([
    {
      carModel: 'BMW X5',
      pricePerDay: '$150',
      availability: 'Available',
      description:
        'Experience luxury and performance with the BMW X5 model. Ideal for both city and highway drives with advanced safety features and autopilot.',
      image: 'BMW X5.jfif',
    },
    {
      carModel: 'Porsche 911',
      pricePerDay: '$180',
      availability: 'Available',
      description:
        'The Porsche 911 offers a perfect blend of comfort and performance with its spacious interior, smooth ride, and advanced technology features.',
      image: 'Porsche.jfif',
    },
    {
      carModel: 'Ford Mustang',
      pricePerDay: '$200',
      availability: 'Not Available',
      description:
        'Luxury meets versatility with the Ford Mustang. Enjoy a comfortable ride with state-of-the-art safety and entertainment features.',
      image: 'Ford Mustang.jfif',
    },
  ]);

  const handleBooking = (carModel) => {
    alert(`Booking Confirmed for ${carModel}!`);
  };

  return (
    <div className="rental-details-container">
      <h2>Rental Details</h2>
      <div className="rental-details-list">
        {rentalDetails.map((car, index) => (
          <div key={index} className="rental-details-card" style={{ marginBottom: '20px' }}>
            <img src={car.image} alt={car.carModel} className="car-image" />
            <div className="car-details">
              <h3>{car.carModel}</h3>
              <p><strong>Price per Day:</strong> {car.pricePerDay}</p>
              <p><strong>Availability:</strong> {car.availability}</p>
              <p><strong>Description:</strong> {car.description}</p>
              {car.availability === 'Available' ? (
                <button className="book-btn" onClick={() => handleBooking(car.carModel)}>
                  Book Now
                </button>
              ) : (
                <button className="book-btn" disabled>
                  Not Available
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalDetails;
