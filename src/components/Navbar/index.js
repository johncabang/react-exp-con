import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="navbar-container"> */}
      <i className="fas fa-bars" />
      <Link to="/" className="navbar-link">
        <h1 className="navbar-logo">EXP|CON</h1>
      </Link>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
