import React from "react";
import Footer from "../../components/Footer";
import PerksSection from "../../components/PerksSection";

import "./styles.css";

function Pricing() {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-wrapper">
          <div className="pricing-title">
            <h1>PRICING</h1>
            <p>
              <span>
                Test out our app today! Choose from three subscription
              </span>
              <span>Based payment models.</span>
            </p>
          </div>
          <div className="pricing-items-wrapper">
            <div className="pricing-items">
              <p className="pricing-text-title" style={{ color: "#D34848" }}>
                BASIC
              </p>
              <div
                style={{
                  borderBottom: "2px solid #D34848",
                  width: 100,
                  marginBottom: "0.7rem",
                }}
              ></div>
              <p className="pricing-text-title" style={{ color: "#D34848" }}>
                MONTHLY
              </p>
              <h1 className="pricing-price">$9</h1>
              <p className="pricing-text">
                <span>Very good</span>
                <span>Amazing </span>
                <span>Perfect job</span>
                <span>Love this</span>
                <span>It's so good</span>
                <span>Features</span>
              </p>
            </div>
            <div className="pricing-items">
              <p className="pricing-text-title" style={{ color: "#FFB33F" }}>
                ADVANCED
              </p>
              <div
                style={{
                  borderBottom: "2px solid #FFB33F",
                  width: 100,
                  marginBottom: "0.7rem",
                }}
              ></div>
              <p className="pricing-text-title" style={{ color: "#FFB33F" }}>
                YEARLY
              </p>
              <h1 className="pricing-price">$99</h1>
              <p className="pricing-text">
                <span>Very good</span>
                <span>Even Amazing </span>
                <span>Perfect job</span>
                <span>Love this more</span>
                <span>It's so so good</span>
                <span>More Features</span>
              </p>
            </div>
            <div className="pricing-items">
              <p className="pricing-text-title" style={{ color: "#1FE1E9" }}>
                PRO
              </p>
              <div
                style={{
                  borderBottom: "2px solid #1FE1E9",
                  width: 100,
                  marginBottom: "0.7rem",
                }}
              ></div>
              <p className="pricing-text-title" style={{ color: "#1FE1E9" }}>
                YEARLY
              </p>
              <h1 className="pricing-price">$120</h1>
              <p className="pricing-text">
                <span>Very very ood</span>
                <span>Even more </span>
                <span>Perfect job</span>
                <span>Love this more</span>
                <span>It's so so good</span>
                <span>More Features</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <PerksSection />
      <Footer />
    </>
  );
}

export default Pricing;
