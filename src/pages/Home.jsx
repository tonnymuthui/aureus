// import React from "react";
import "../styles/home.css";
import Navbar from "../components/navbar.jsx";
import HeroSlider from "../components/heroSlider";
// import LogoCarousel from "../components/logoCarousel";
import Footer from "../components/footer";
// import { useNavigate } from "react-router-dom";
// import hero1 from "../assets/herotest.png"
import coop from "../assets/coop.jpg";
import ppes from "../assets/PPEs.jpg";
import workwear from "../assets/workwear2.png";

const Home = () => {
  // const navigate = useNavigate;

  // const handleredirect 

  return (
    <div className="home">
      <section>

       <Navbar />
      </section>

     
      <section>
      <HeroSlider />
      </section>


      <section className="spb">
  <div className="spb-item">
    <svg viewBox="0 0 24 24" className="spb-icon">
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3z" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
    <span>SUPPLY</span>
  </div>

  <div className="spb-divider" />

  <div className="spb-item">
    <svg viewBox="0 0 24 24" className="spb-icon">
      <path d="M4 18h16" />
      <path d="M6 18c0-5 2.5-9 6-9s6 4 6 9" />
      <path d="M3 18h18" />
      <path d="M11 5v3" />
    </svg>
    <span>PROTECT</span>
  </div>

  <div className="spb-divider" />

  <div className="spb-item">
    <svg viewBox="0 0 24 24" className="spb-icon">
      <path d="M12.5 3.5 20 11l-8.5 8.5L4 12V4.5z" />
      <circle cx="8.5" cy="8" r="1.2" />
    </svg>
    <span>BRAND</span>
  </div>
</section>

      <section className="intro">
        <h1>
          Aureus Company Limited is a dynamic and professionally driven supply and procurement company
committed to delivering high-quality products and dependable business solutions across diverse
industries.
          <br />
          We Deliver Persona Protective Equipment, Professional Merchandise, Uniforms, And Workplace Essentials
          That Help Organizations Look Consistent, Safe, And Credible.
        </h1>
      </section>

      <section id="services" className="services">
        <h2>We Provide Services That Elevate Your Business</h2>

        <div className="service service--left">
          <img src={ppes} alt="Personal Protective Equipment (PPEs)" />
          <div className="service__content service__content--dark">
            <h3>Personal Protective Equipment (PPEs)</h3>
            <p>
              Aureus Company Limited is a dynamic and professionally driven supply and procurement company
committed to delivering high-quality products and dependable business solutions across diverse
industries.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="service service--right">
          <div className="service__content service__content--dark">
            <h3>Branded Workwear</h3>
            <p>
              We offer efficient sourcing and supply solutions tailored to institutional, corporate, and industrial
requirements.
            </p>
            <button>Learn More</button>
          </div>
          <img src={workwear} alt="Branded Workwear" />
        </div>

        <div className="service service--left">
          <img src={coop} alt="Corporate Branding & Promotional Merchandise" />
          <div className="service__content service__content--dark">
            <h3>Corporate Branding & Promotional Merchandise</h3>
            <p>
              We provide professional branding services that help businesses enhance visibility and strengthen
brand identity.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className="process">
        <h2>Quality Service In Four Steps</h2>

        <div className="process__steps">
          <div className="process__step">Send Inquiry</div>
          <div className="process__step">Share Your Requirements</div>
          <div className="process__step">Receive Quote & Mock-Ups</div>
          <div className="process__step process__step--final">Production And Delivery</div>
        </div>
      </section>

      <section className="clients">
        <h2>Our Partners & Clients</h2>
        {/* <LogoCarousel /> */}
      </section>

      <Footer /> 
    </div>
  );
};

export default Home;