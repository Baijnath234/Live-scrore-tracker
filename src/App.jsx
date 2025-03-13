import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected import
import CareerSection from "./Components/CareerSection"; // Corrected folder name
import PopularServices from "./Components/PopularServices"; // Corrected folder name
import PromotedServices from "./Components/PromotedPage"; // Corrected folder name
import HospitalAndLabBooking from "./Components/HospitalLabBooking"; // Corrected folder name
import ServiceHub from "./Components/ServiceHub"; // Corrected folder name
import Login from "./Components/LoginPage"; // Correct import
import HomePage from "./Components/HomePage";
import HealthCare from "./Components/Healthcare";
import Govt_Jobs from './Components/Govt_jobs'
import NewsSection from "./Components/NewsSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomePage />} />

        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/popular-services" element={<PopularServices />} />
        <Route path="/promoted-services" element={<PromotedServices />} />
        <Route path="/hospital-lab-booking" element={<HospitalAndLabBooking />} />
        <Route path="/service-hub" element={<ServiceHub />} />
        <Route path="HealthCare" element={<HealthCare />} />  
        <Route path="/govt-job" element={<Govt_Jobs />} />  
        <Route path="/News" element={<NewsSection />} />  
      </Routes>
    </Router>
  );
}

export default App;
