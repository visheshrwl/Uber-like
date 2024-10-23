// src/components/RideRequestForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Footer from './footer';

const RideRequestForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call API to request a ride
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
     <form onSubmit={handleSubmit}>
      <h2>Request a Ride</h2>
      <div>
        <label>Pickup Location:</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Drop Location:</label>
        <input
          type="text"
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Request</button>
    </form>
    <Footer/>
   </div>
  );
};

export default RideRequestForm;
