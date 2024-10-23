// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Map from './Map'; // Google Maps or Mapbox integration
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Ride Dashboard</h1>
      <div>
        <Link to="/ride-request">
          <button>Request a Ride</button>
        </Link>
      </div>
      <div>
        <h2>Available Drivers</h2>
        <Map /> {/* Embed the map component */}
      </div>
    </div>
  );
};

export default Dashboard;
