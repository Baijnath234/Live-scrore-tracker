 
// src/Components/HomePage.js
import React from "react";
import CareerSection from "./CareerSection";
import PopularServices from "./PopularServices";
import PromotedServices from "./PromotedPage";
import HospitalAndLabBooking from "./HospitalLabBooking";
import ServiceHub from "./ServiceHub";

const HomePage = () => {
  return (
    <div>
      <CareerSection />
      <PopularServices />
      <PromotedServices />
      <HospitalAndLabBooking />
      <ServiceHub />
    </div>
  );
};

export default HomePage;
