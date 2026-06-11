// import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src="" alt="Aureus Company Limited Logo" className="navbar__logo-img" />
      </div>

      <nav className="navbar__links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;