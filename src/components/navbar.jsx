import React from "react";
import sell from "../assets/logo.png";
import "../stylesheet/navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo"></div>
      <div className="navbar-btn">
        <ul className="navbtn">
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
        </ul>
      </div>
      <div className="prof-btn">
        <ul className="profile">
          <li>linkedin</li>
          <li>linkedin</li>
          <li>linkedin</li>
          <li>linkedin</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
