// import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/aureus2.png"

const Navbar = () => {
  const navigate = useNavigate;
  return (
    

    <header className="navbar">
      <div className="navbar__logo">
        <a href="/"><img src={logo} onClick={() => navigate('')} alt="Aureus Company Limited Logo" className="navbar__logo-img" /> </a>
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