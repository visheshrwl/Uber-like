import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import './Dashboard.css';

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Environment variable
  });

  const center = { lat: 37.7749, lng: -122.4194 }; // Example coordinates (San Francisco)

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerStyle={{ width: '100%', height: '400px' }}
    >
      {/* Example Marker */}
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      {/* You can render multiple markers based on available drivers */}
    </GoogleMap>
  );
};

export default Map;
