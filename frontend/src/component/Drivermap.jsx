// src/component/DriverMap.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header from './header';
import Footer from './footer';
import './Map.css';
import './header.css';
import './footer.css';

// Mock data for drivers with statuses
const mockDriverData = [
    { id: 1, name: 'Driver 1', status: 'Available', coordinates: [51.505, -0.09] },
    { id: 2, name: 'Driver 2', status: 'Busy', coordinates: [51.515, -0.1] },
    { id: 3, name: 'Driver 3', status: 'Offline', coordinates: [51.525, -0.11] },
    // Add more drivers as needed
];

const DriverMap = () => {
    const [searchCity, setSearchCity] = useState('');
    const [coordinates, setCoordinates] = useState([51.505, -0.09]); // Default coordinates (London)
    const [selectedStatus, setSelectedStatus] = useState('All'); // State to track filter selection
    const [filteredDrivers, setFilteredDrivers] = useState(mockDriverData); // Filtered driver data

    // Function to handle city search and zoom
    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${searchCity}&key=YOUR_API_KEY`
            );
            const data = await response.json();
            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry;
                setCoordinates([lat, lng]);
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };

    // Function to handle driver status filter
    const handleFilterChange = (status) => {
        setSelectedStatus(status);
        if (status === 'All') {
            setFilteredDrivers(mockDriverData); // Show all drivers if 'All' is selected
        } else {
            setFilteredDrivers(mockDriverData.filter(driver => driver.status === status));
        }
    };

    // Component to set the map's view based on coordinates
    const MapUpdater = () => {
        const map = useMap();
        map.setView(coordinates, 12); // Adjust the zoom level as needed
        return null;
    };

    return (
        <div>
            <Header />
            <div className="map-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                    />
                    <button onClick={handleSearch}>Enter</button>
                </div>

                {/* Filter Dropdown */}
                <div className="filter-bar">
                    <label htmlFor="status-filter">Filter by Status:</label>
                    <select
                        id="status-filter"
                        value={selectedStatus}
                        onChange={(e) => handleFilterChange(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Available">Available</option>
                        <option value="Busy">Busy</option>
                        <option value="Offline">Offline</option>
                    </select>
                </div>

                {/* Map Component */}
                <MapContainer center={coordinates} zoom={6} style={{ height: '80vh', width: '100%' }}>
                    <MapUpdater />
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {/* Display markers for filtered drivers */}
                    {filteredDrivers.map((driver) => (
                        <Marker key={driver.id} position={driver.coordinates} />
                    ))}
                </MapContainer>
            </div>
            <Footer />
        </div>
    );
};

export default DriverMap;
