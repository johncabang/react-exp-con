import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className="fas fa-bars" />
      </div>
      <Link to="/" className="navbar-link">
        <h1 className="navbar-logo">EXP|CON</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <div className="nav-item-wrapper">
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <div className="menu-icon">
                <i className="fas fa-bars" />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              WHAT IS IT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              PERKS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>
              PRICING
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
