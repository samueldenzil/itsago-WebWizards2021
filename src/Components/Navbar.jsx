import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="$" className="logo">
        <img src={logo} alt="logo-img" /> itsago
      </a>
      <ul className="nav-item">
        <li>
          <a href="$">Home</a>
        </li>
        <li>
          <a href="$">About</a>
        </li>
        <li>
          <a href="$">Contact Us</a>
        </li>
        <li>
          <a className="login-btn" href="$">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
