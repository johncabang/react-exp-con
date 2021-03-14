import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
      <h3>Experience your favourite artists like never</h3>
      <h3>before and from the comfort of your own home.</h3>
      <Link to="/pricing">
        <button className="hero-button">TRY IT NOW</button>
      </Link>
    </div>
  );
}

export default HeroSection;
