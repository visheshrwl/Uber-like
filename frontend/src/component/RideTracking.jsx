
import React, { useEffect, useState } from "react";
import Map from "./DriverMap";
import Footer from "./footer";



const RideTracking = () => {
  const [driverLocation, setDriverLocation] = useState<Location>({
    lat: 37.7749, // Default to San Francisco
    lng: -122.4194,
  });

  const driverId = "driver123"; // This can be dynamic or fetched

  useEffect(() => {
    WebSocketService.connect();

    // Subscribe to driver location updates
    WebSocketService.subscribeToDriverLocation(driverId, (location) => {
      setDriverLocation(location);
    });

    return () => {
      WebSocketService.disconnect();
    };
  }, [driverId]);

  return (
    <div>
      <Map driverLocation={driverLocation} />
      <Footer/>
    </div>
  );
};

export default RideTracking;
