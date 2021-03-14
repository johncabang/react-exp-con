import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import medium17 from "./medium17.png";
import medium27 from "./medium27.png";

function RedSection() {
  return (
    <div className="red-container">
      <div className="demo-container">
        <h1>SUPERIOR SOUND</h1>
        <p>
          <span>Experience live versions of your</span>
          <span>favourite songs.</span>
        </p>
        <button className="red-button">SEE DEMO</button>
      </div>
      <div className="try-container">
        <Link to="/pricing">
          <button className="red-button-try">TRY IT NOW</button>
        </Link>
        <div className="speakers-container">
          <img src={medium17} className="img-medium17" alt="" />
          <img src={medium27} className="img-medium27" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RedSection;
