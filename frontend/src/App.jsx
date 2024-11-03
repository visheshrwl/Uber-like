import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RideHistory from "./component/RideHistory.jsx";
import RideDetail from "./component/RideDetail.jsx";
import FaqSection from "./component/faqsection.jsx";
import Dashboard from "./component/Dashboard.jsx";
import RideRequestForm from "./component/RideForm.jsx";
import RideStatus from "./component/RideStatus.jsx";

import RideTracking from "./component/RideTracking.jsx";
import DriverMap from "./component/Drivermap.jsx";
import FareEstimate from "./component/FareEstimate.jsx";
import Payment from "./component/Payments.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RideHistory />} />
        <Route path="/ride/:id" element={<RideDetail />} />
        <Route path="/faqs" element={<FaqSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/ride-request" element={<RideRequestForm />} />
        <Route path="/DriverMap" element={<DriverMap/>} />
        <Route path="/dashboard/ride-status" element={<RideStatus />} />
        <Route path="/payments" element={<Payment />} />

        <Route path="/dashboard/ride-tracking" element={<RideTracking />} />

        <Route path="/FareEstimate" element={<FareEstimate />} />

      </Routes>
    </Router>
  );
};

export default App;
