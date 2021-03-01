import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Features from "../components/features/Features";
import Tours from "../components/tours/Tours";
import Stories from "../components/stories/Stories";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
    </div>
  );
};

export default Homepage;
