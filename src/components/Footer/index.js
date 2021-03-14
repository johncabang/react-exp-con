import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-email">
        <i className="fas fa-envelope" />
        support@experienceconcerts.co
      </p>
      <div className="footer-section">
        <h1 className="footer-logo">EXP|CON</h1>
        <p className="footer-text">
          {new Date().getFullYear()} &#169; All Rights Reserved | Speer
          Technologies Incorporated
        </p>
      </div>
    </div>
  );
}

export default Footer;
