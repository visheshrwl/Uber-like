// src/component/FareEstimate.jsx
import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import './FareEstimate.css';

const FareEstimate = () => {
    const [pickupLocation, setPickupLocation] = useState('Baddi'); // Default pickup location
    const [dropLocation, setDropLocation] = useState('Patiala');   // Default drop location
    const [rideType, setRideType] = useState('standard');          // Default to standard
    const [fare, setFare] = useState(null);

    // Function to calculate fare estimate
    const calculateFare = () => {
        // Base fare calculation (randomly generated for demonstration)
        let baseFare = Math.random() * 50 + 20; // Random fare between 20 and 70

        // Adjust fare for Premium ride type
        if (rideType === 'premium') {
            baseFare *= 1.5; // 50% extra for Premium
        }

        setFare(baseFare.toFixed(2));
    };

    return (
        <div>
            <Header />
            <div className="fare-estimate-container">
                <h2>Fare Estimate</h2>

                <div className="location-inputs">
                    <label>
                        Pickup Location:
                        <input
                            type="text"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            placeholder="Enter pickup location"
                        />
                    </label>

                    <label>
                        Drop-off Location:
                        <input
                            type="text"
                            value={dropLocation}
                            onChange={(e) => setDropLocation(e.target.value)}
                            placeholder="Enter drop-off location"
                        />
                    </label>

                    <label>
                        Ride Type:
                        <select
                            value={rideType}
                            onChange={(e) => setRideType(e.target.value)}
                        >
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                        </select>
                    </label>

                    <button onClick={calculateFare}>Enter</button>
                </div>

                {/* Display Fare Estimate */}
                {fare && (
                    <div className="fare-display">
                        <p>
                            Estimated Fare ({rideType.charAt(0).toUpperCase() + rideType.slice(1)}): ${fare}
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default FareEstimate;