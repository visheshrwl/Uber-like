// src/components/RideForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Header from './header';
import Footer from './footer';

const RideRequestForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/ride-request', {
        pickupLocation,
        dropLocation,
      });

      if (response.data.success) {
        // Redirect to ride status page after success
        navigate('/ride-status');
      }
    } catch (error) {
      console.error('Error requesting ride:', error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Request a Ride</h2>
        <label>Pickup Location:</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          required
        />
        <label>Drop Location:</label>
        <input
          type="text"
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
      <Footer />
    </div>
  );
};

export default RideRequestForm;
