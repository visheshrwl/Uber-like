import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RideHistory from "./component/RideHistory.jsx";
import RideDetail from "./component/RideDetail.jsx";
import FaqSection from "./component/faqsection.jsx";
import Dashboard from "./component/Dashboard.jsx";
import RideRequestForm from "./component/RideForm.jsx";
import RideStatus from "./component/RideStatus.jsx";
import RideTracking from "./component/RideTracking.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RideHistory />} />
        <Route path="/ride/:id" element={<RideDetail />} />
        <Route path="/faqs" element={<FaqSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/ride-request" element={<RideRequestForm />} />
        <Route path="/dashboard/ride-status" element={<RideStatus />} />
        <Route path="/dashboard/ride-tracking" element={<RideTracking />} />
      </Routes>
    </Router>
  );
};

export default App;
