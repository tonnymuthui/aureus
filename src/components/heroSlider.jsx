import  { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/heroSlider.css";
import hero from "../assets/hero3.png"
import ww from "../assets/hero6.png"
import ppe from "../assets/PPEs.jpg"



const slides = [
  {
    image: ppe,
    title: "PPE Solutions",
    text: "Reliable protective equipment and workplace essentials delivered with quality and consistency.",
  },
  {
    image: ww,
    title: "Workwear",
    text: "Professional branded uniforms and workwear that make your team look sharp, unified, and credible.",
  },
  {
    image: hero,
    title: "Branding",
    text: "Your Company's image crafted with intention. For visibility and to inspire Trust",
  },
];

const HeroSlider = () => {
  const navigate = useNavigate;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero__slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero__slide" key={index}>
            <img className="hero__bg" src={slide.image} alt={slide.title} />
            <div className="hero__overlay">
              <div className="hero__card">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
               <Link to="/services"> <button type="button" onClick={() => navigate('/services')} className="hero__btn">Get Quote</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero__dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "hero__dot hero__dot--active" : "hero__dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;