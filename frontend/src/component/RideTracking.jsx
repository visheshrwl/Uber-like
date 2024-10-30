// src/components/RideTracking.js
import React, { useEffect, useState } from "react";
import Map from "./DriverMap";
import Footer from "./footer";
import RouteService from "../services/RouteService";

const RideTracking = () => {
  const [driverLocation, setDriverLocation] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  const [destination, setDestination] = useState({ lat: 37.7849, lng: -122.4294 });
  const [optimizedRoute, setOptimizedRoute] = useState(null);
  const [eta, setEta] = useState(null);
  const driverId = "driver123";

  useEffect(() => {
    WebSocketService.connect();
    WebSocketService.subscribeToDriverLocation(driverId, (location) => {
      setDriverLocation(location);
      fetchOptimizedRoute(location, destination);
    });

    return () => {
      WebSocketService.disconnect();
    };
  }, [driverId]);

  const fetchOptimizedRoute = async (currentLocation, destination) => {
    try {
      const routeData = await RouteService.getOptimizedRoute(currentLocation, destination);
      setOptimizedRoute(routeData);
      setEta(routeData.eta); // Assuming the API response contains an eta property
    } catch (error) {
      console.error("Error fetching optimized route:", error);
    }
  };

  return (
    <div>
      <Map driverLocation={driverLocation} optimizedRoute={optimizedRoute} />
      {eta && <div>Estimated Time of Arrival: {eta} minutes</div>}
      <Footer />
    </div>
  );
};

export default RideTracking;
