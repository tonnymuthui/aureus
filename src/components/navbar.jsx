// import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/aureus2.png"

const Navbar = () => {
  // const navigate = useNavigate;
  return (
    

    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/"><img src={logo} alt="Aureus Company Limited Logo" className="navbar__logo-img" /> </Link>
      </div>
        <div>
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;