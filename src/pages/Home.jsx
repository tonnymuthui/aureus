// import React from "react";
import "../styles/home.css";
import Navbar from "../components/navbar.jsx";
import HeroSlider from "../components/heroSlider";
// import LogoCarousel from "../components/logoCarousel";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSlider />

      <section className="intro">
        <h1>
          We Are A Branding And General Supplies Company
          <br />
          We Deliver Professional Merchandise, Uniforms, And Workplace Essentials
          That Help Organizations Look Consistent, Safe, And Credible.
        </h1>
      </section>

      <section id="services" className="services">
        <h2>We Provide Services That Elevate Your Business</h2>

        <div className="service service--left">
          <img src="" alt="Corporate Branding & Promotional Merchandise" />
          <div className="service__content service__content--dark">
            <h3></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="service service--right">
          <div className="service__content service__content--dark">
            <h3>Branded Workwear</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Learn More</button>
          </div>
          <img src="" alt="Branded Workwear" />
        </div>

        <div className="service service--left">
          <img src="" alt="Personal Protective Equipment" />
          <div className="service__content service__content--dark">
            <h3>Corporate Branding & Promotional Merchandise</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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