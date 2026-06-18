// import React from "react";
import "../styles/navbar.css";
import logo from "../assets/aureus2.png"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Aureus Company Limited Logo" className="navbar__logo-img" />
      </div>
        <div>
      <nav className="navbar__links">
        <a href="/">Home</a>
        <a href="about">About Us</a>
        <a href="services">Services</a>
        <a href="contact">Contact</a>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;