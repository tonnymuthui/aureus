import "../styles/logoCarousel.css";
// import logo from "../assets/aureus2.png";
import kplc from "../assets/logos/kplc.png";
import kengen from "../assets/logos/kengen.webp";
import betika from "../assets/logos/betika.png";
import jambo from "../assets/logos/jambo.PNG";
import kq from "../assets/logos/kq.svg";
import cure from "../assets/logos/cure.webp";
import qona from "../assets/logos/qona.png";
import eac from "../assets/logos/kplc.png";
import cfao from "../assets/logos/cfao.png";












const defaultLogos = [
  { src: kplc , alt: "KPLC" },
  { src: kengen , alt: "KENGEN" },
  { src: betika , alt: "Betika" },
  { src: jambo , alt: "JamboJet" },
  { src: kq, alt: "KQ(KENYA AIRWAYS)" },
  { src: cure, alt: "CURE International" },
  { src: qona , alt: "Safaricom Sacco(QONA)" },
  { src: eac , alt: "East African Canvas" },
  { src: cfao , alt: "CFAO Kenya" },
  
    // { src: "/assets/aurues2.png", alt: "CFAO Kenya" },  
      
    
];

const LogoCarousel = ({ logos = defaultLogos, title = "Trusted by industry leaders" }) => {
  // Duplicate the set so the strip can loop with no visible seam.
  const track = [...logos, ...logos];

  return (
    <section className="logo-carousel">
      {title && <p className="logo-carousel__title">{title}</p>}

      <div className="logo-carousel__viewport">
        <div className="logo-carousel__track">
          {track.map((logo, index) => (
            <div className="logo-carousel__slot" key={`${logo.alt}-${index}`}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;