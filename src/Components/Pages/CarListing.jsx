import React from 'react';
import './CarListing.css';

const cars = [
  {
    id: 1,
    name: 'Porsche 911',
    image: '/Porsche.jfif',
    description: 'Electric luxury sedan with top-notch features.',
  },
  {
    id: 2,
    name: 'Ford Mustang',
    image: '/Ford Mustang.jfif',
    description: 'Classic American muscle with modern performance.',
  },
  {
    id: 3,
    name: 'BMW X5',
    image: '/BMW X5.jfif',
    description: 'Luxury SUV with advanced technology and comfort.',
  },
  {
    id: 1,
    name: 'Porsche 911',
    image: '/Porsche.jfif',
    description: 'Electric luxury sedan with top-notch features.',
  },
  {
    id: 2,
    name: 'Ford Mustang',
    image: '/Ford Mustang.jfif',
    description: 'Classic American muscle with modern performance.',
  },
  {
    id: 3,
    name: 'BMW X5',
    image: '/BMW X5.jfif',
    description: 'Luxury SUV with advanced technology and comfort.',
  },
  {
    id: 1,
    name: 'Porsche 911',
    image: '/Porsche.jfif',
    description: 'Electric luxury sedan with top-notch features.',
  },
  {
    id: 2,
    name: 'Ford Mustang',
    image: '/Ford Mustang.jfif',
    description: 'Classic American muscle with modern performance.',
  },
  {
    id: 3,
    name: 'BMW X5',
    image: '/BMW X5.jfif',
    description: 'Luxury SUV with advanced technology and comfort.',
  },
  {
    id: 1,
    name: 'Porsche 911',
    image: '/Porsche.jfif',
    description: 'Electric luxury sedan with top-notch features.',
  },
  {
    id: 2,
    name: 'Ford Mustang',
    image: '/Ford Mustang.jfif',
    description: 'Classic American muscle with modern performance.',
  },
  {
    id: 3,
    name: 'BMW X5',
    image: '/BMW X5.jfif',
    description: 'Luxury SUV with advanced technology and comfort.',
  },

];

const CarListing = () => {
  return (
    <div className="car-listing-container">
      <h2 className="car-listing-title">Available Cars for Rent</h2>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3 className="car-name">{car.name}</h3>
            <p className="car-description">{car.description}</p>
            <button className="rent-btn">Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListing
