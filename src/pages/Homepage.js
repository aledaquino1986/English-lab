import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Features from "../components/features/Features";
import Tours from "../components/tours/Tours";
import Stories from "../components/stories/Stories";
import Booking from "../components/booking/Booking";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
    </div>
  );
};

export default Homepage;
