import React from "react";
import ExpconSection from "../components/ExpconSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PerksSection from "../components/PerksSection";
import RedSection from "../components/RedSection";
import ReviewsSection from "../components/ReviewSection";
import YellowSection from "../components/YellowSection";

function Home() {
  return (
    <div style={{ top: 0, position: "absolute", width: "100%" }}>
      <HeroSection />
      <RedSection />
      <YellowSection />
      <PerksSection />
      <ReviewsSection />
      <ExpconSection />
      <Footer />
    </div>
  );
}

export default Home;
