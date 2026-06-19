// import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/aureus2.png"


const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer__left">
        <img src={logo} alt="Aureus Company Limited" className="footer__logo" />

        <div className="footer__socials">
          <a href="" aria-label="LinkedIn">in</a>
          <a href="" aria-label="Facebook">f</a>
          <a href="" aria-label="Instagram">◎</a>
          <a href="" aria-label="X">X</a>
        </div>
      </div>

      <div className="footer__links">
        <div>
          <h4>Contact</h4>
          <Link to="/contact">Contact Us</Link >
          <Link to="/contact">Request Quote</Link >
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Careers</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;