import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import LearningExperience from "./LearningExperience";
import Header from "./Header";
import Background from "./background"; 
import "./page.css";

const HomePage = () => {
  return (
    <div style={{ position: "relative" }}>
      <Background /> 
      <div style={{ position: "relative", zIndex: 1 }}> 
        <Header />
        <HeroSection />
        <FeaturesSection />
        <LearningExperience />
      </div>
    </div>
  );
};

export default HomePage;
