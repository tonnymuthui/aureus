import  { useEffect, useState } from "react";
import "../styles/HeroSlider.css";

const slides = [
  {
    image: "",
    title: "Branding",
    text: "Your new chapter is being crafted with intention. Our 10+ years experience is on its way—refined, considered, and worthy of the name.",
  },
  {
    image: "",
    title: "Workwear",
    text: "Professional branded uniforms and workwear that make your team look sharp, unified, and credible.",
  },
  {
    image: "",
    title: "PPE Solutions",
    text: "Reliable protective equipment and workplace essentials delivered with quality and consistency.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

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
                <button className="hero__btn">Get Quote</button>
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