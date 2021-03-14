import React from "react";
import "./styles.css";

function PerksSection() {
  return (
    <div className="perks-container">
      <div className="perks-wrapper">
        <div className="perks-title">
          <h1>PERKS</h1>
        </div>
        <div className="perks-item-wrapper">
          <div className="perks-items">
            <div
              style={{
                borderBottom: "2px solid #D34848",
                width: 50,
                marginBottom: "0.7rem",
              }}
            ></div>
            <p className="perks-text-title" style={{ color: "#D34848" }}>
              <span>Subscription</span> <span>Payment</span> <span>Model</span>
            </p>
            <p className="perks-text">
              <span>No commitment,</span>
              <span>cancel anytime. Never </span>
              <span>worry about forgetting</span>
              <span> payment again!</span>
            </p>
          </div>
          <div className="perks-items">
            <div
              style={{
                borderBottom: "2px solid #1FE1E9",
                width: 50,
                marginBottom: "0.7rem",
              }}
            ></div>
            <p className="perks-text-title" style={{ color: "#1FE1E9" }}>
              <span>No Fee</span> <span>Cancelation</span> <span>Policy</span>
            </p>
            <p className="perks-text">
              <span>No commitment,</span>
              <span>cancel anytime. Never </span>
              <span>worry about forgetting</span>
              <span> payment again!</span>
            </p>
          </div>
          <div className="perks-items">
            <div
              style={{
                borderBottom: "2px solid #FFB33F",
                width: 50,
                marginBottom: "0.7rem",
              }}
            ></div>
            <p className="perks-text-title" style={{ color: "#FFB33F" }}>
              <span>Subscription</span>
              <span>Payment</span>
              <span>Model</span>
            </p>
            <p className="perks-text">
              <span>No commitment,</span>
              <span>cancel anytime. Never </span>
              <span>worry about forgetting</span>
              <span> payment again!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerksSection;
