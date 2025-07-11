import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import NavBar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <NavBar className="fixed top-0 left-0 w-full z-50" />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </>
  );
}
export default LandingPage;
