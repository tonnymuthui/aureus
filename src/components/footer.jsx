// import React from "react";
import "../styles/Footer.css";
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
          <a href="">Contact Us</a>
          <a href="">Request Quote</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="">About Us</a>
          <a href="/services">Services</a>
          <a href="">Projects</a>
          <a href="">Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;