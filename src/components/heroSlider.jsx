import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/heroSlider.css";
import hero from "../assets/hero1.png"
import ww from "../assets/ww.png"
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
    text: "Your new chapter is being crafted with intention. Our 10+ years experience is on its way—refined, considered, and worthy of the name..",
  },
];

const HeroSlider = () => {
  const navigate = useNavigate;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

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
               <a href="/services"> <button type="button" onClick={() => navigate('/services')} className="hero__btn">Get Quote</button></a>
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