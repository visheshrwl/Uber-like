import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RideHistory from "./component/RideHistory.jsx";
import RideDetail from "./component/RideDetail.jsx";
import FaqSection from "./component/faqsection.jsx";
import DriverMap from './component/DriverMap';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RideHistory />} />
        <Route path="/ride/:id" element={<RideDetail />} />
        <Route path="/faqs" element={<FaqSection />} /> 
        <Route path="/drivermap" element={<DriverMap/>}/>
      </Routes>
    </Router>
  );
};

export default App;
