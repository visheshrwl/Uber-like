
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


const Map = ({ driverLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const [currentLocation, setCurrentLocation] = useState(driverLocation);

  useEffect(() => {
    const animateMarker = () => {
      setCurrentLocation((prevLocation) => {
        const newLat = prevLocation.lat + (driverLocation.lat - prevLocation.lat) * 0.05;
        const newLng = prevLocation.lng + (driverLocation.lng - prevLocation.lng) * 0.05;

        return { lat: newLat, lng: newLng };
      });
    };

    const interval = setInterval(animateMarker, 50);

    return () => clearInterval(interval);
  }, [driverLocation]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={currentLocation}
      zoom={15}
    >
      <Marker position={currentLocation} />
    </GoogleMap>
  );
};

export default Map;
