import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Features from "../components/features/Features";
import Tours from "../components/tours/Tours";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Tours />
    </div>
  );
};

export default Homepage;
