// src/components/DriverMap.js
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";

const Map = ({ driverLocation, optimizedRoute }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = driverLocation;

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
      <Marker position={driverLocation} />
      {optimizedRoute && (
        <DirectionsRenderer
          directions={optimizedRoute} // Ensure this is the proper format expected by DirectionsRenderer
          options={{ suppressMarkers: true }} // Suppress markers if you want to show custom ones
        />
      )}
    </GoogleMap>
  );
};

export default Map;
