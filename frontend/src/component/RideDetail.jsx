import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RideDetail = () => {
  const { id } = useParams();
  const [ride, setRide] = useState(null);

  useEffect(() => {
    fetchRideDetail();
  }, []);

  const fetchRideDetail = async () => {
    try {
      const response = await axios.get(`/api/ride/${id}`);
      setRide(response.data);
    } catch (error) {
      console.error("Error fetching ride details", error);
    }
  };

  const downloadReceipt = () => {
    axios({
      url: `/api/ride/${id}/receipt`,
      method: "GET",
      responseType: "blob", // important for downloading binary data
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `receipt_${id}.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading receipt", error);
      });
  };

  if (!ride) return <div>Loading...</div>;

  return (
    <div>
      <h1>Ride Details</h1>
      <p>Date: {ride.date}</p>
      <p>Driver: {ride.driverName}</p>
      <p>Route: {ride.route}</p>
      <p>Fare: ${ride.fare}</p>
      <button onClick={downloadReceipt}>Download Receipt</button>
    </div>
  );
};

export default RideDetail;
