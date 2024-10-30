// src/components/RideStatus.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import Header from './header';
import Footer from './footer';

const RideStatus = () => {
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    // Poll the backend for the ride status every few seconds
    const interval = setInterval(async () => {
      try {
        const response = await axios.get('/api/ride-status'); // Replace with your backend endpoint
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching ride status:', error);
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <h2>Ride Status</h2>
      <p>Status: {status}</p>
      <Footer />
    </div>
  );
};

export default RideStatus;
