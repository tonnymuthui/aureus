import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/services.css";
import coop from "../assets/coop.jpg";
import ppes from "../assets/PPEs.jpg";
import workwear from "../assets/workwear2.png";
import safe from "../assets/safegear.jpg";
import protect from "../assets/proctectiveclothes.jpg";
import hh from "../assets/headhandpr.png";
import customsafe from "../assets/customesafety.PNG";
import corpuni from "../assets/corpuniforms.PNG";
import indww from "../assets/industrialww2.PNG";
import emb from "../assets/emb.PNG";
import indspec from "../assets/specificsolutions.PNG";
import apparel from "../assets/workapparel.jpg";
import promo from "../assets/coopb.png";
import event from "../assets/corpevent.png";
// import workwear from "../assets/workwear2.png";






const ppeCards = [
  {
    title: "Safety Gear Supply",
    text: "Reliable PPE solutions that help protect your workforce and support workplace safety standards across multiple industries.",
    image: safe ,
  },
  {
    title: "Protective Clothing",
    text: "Functional protective apparel designed to improve safety, comfort, and durability in the workplace.",
    image: protect,
  },
  {
    title: "Head & Hand Protection",
    text: "Essential protection products including helmets, gloves, and other safety accessories for daily use.",
    image: hh,
  },
  {
    title: "Custom Safety Packages",
    text: "Flexible PPE supply packages tailored to the needs of your business, team size, and budget.",
    image: customsafe,
  },
];


const genSuppliesCards = [
  {
    title: "Corporate Uniforms",
    text: "Professional office and staff uniforms designed for comfort, consistency, and a polished corporate appearance. Customized to suit your brand and workplace needs.",
    image: corpuni,
  },
  {
    title: "Industrial Workwear",
    text: "Durable and practical workwear made for demanding environments and everyday use across different industries.",
    image: indww,
  },
  {
    title: "Custom Embroidery & Printing",
    text: "High-quality branding solutions that help your team and company identity stand out clearly and professionally.",
    image: emb,
  },
  {
    title: "Industry-Specific Solutions",
    text: "Tailored workwear solutions designed to match the requirements of your sector and working conditions.",
    image: indspec,
  },
];

const brandingCards = [
  {
    title: "Branded Apparel",
    text: "Reliable PPE solutions that help protect your workforce and support workplace safety standards across multiple industries.",
    image: apparel,
  },
  {
    title: "Promotional Items",
    text: "Functional protective apparel designed to improve safety, comfort, and durability in the workplace.",
    image: promo,
  },
  {
    title: "Corpotate Event Branding",
    text: " We provide  the strategic integration of a company’s identity, values, and messaging into every aspect of an event. Transforming gatherings from simple logistical exercises into immersive experiences that reinforce brand recognition and forge emotional connections with attendees.",
    
    image: event,
  },
  
];


const ServicesSection = ({ badge, title, description, bgImage, cards }) => {
  return (
    <section className="services-body__section">
      <div className="services-body__badge">{badge}</div>

      <div className="services-body__hero">
        <img src={bgImage} alt={title} className="services-body__hero-image" />
        <div className="services-body__hero-overlay">
          <h2 className="services-body__hero-title">{title}</h2>
        </div>
      </div>

      <p className="services-body__description">{description}</p>

      <div className="services-body__cards">
        {cards.map((card, index) => (
          <article className="service-card" key={index}>
            <div className="service-card__image-wrap">
              <img src={card.image} alt={card.title} className="service-card__image" loading="lazy" />
            </div>

            <h3 className="service-card__title">{card.title}</h3>
            <p className="service-card__text">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};



const Services = () => {
      return (
        <div>
            <Navbar/>
            <section className="heading">
                <h1>Our Services</h1>

            </section>
            <section>
             <h3>
          {/* We Are A PPEs, Branding And General Supplies Company
          <br />
          We Deliver Professional Merchandise, Uniforms, And Workplace Essentials
          That Help Organizations Look Consistent, Safe, And Credible. */}
            </h3>
            </section>
             <div className="services-body">
            <ServicesSection
                badge="view some of our previous work"
                title="Personal Protective Equipment (PPEs)"
                bgImage = {ppes}
                description= "Protect your workforce with reliable safety equipment and PPE solutions designed to meet workplace safety standards across multiple industries."
                cards={ppeCards}
            />

            <ServicesSection
                badge="view some of our previous work"
                title="General Supplies & Procurement"
                bgImage={workwear}
                description="We offer efficient sourcing and supply solutions tailored to institutional, corporate, and industrial
requirements."
                cards={genSuppliesCards}
            />


            <ServicesSection
                badge="view some of our previous work"
                title="Corporate Branding"
                bgImage={coop}
                description="We Provide Durable And Professional Workwear Solutions Customized To Suit Different Industries And Working Environments While Maintaining Your Company’s Brand Identity."
                cards={brandingCards}
            />

            

              {/* <ServicesSection
                badge="view some of our previous work"
                title="Personal Protective Equipment (PPEs)"
                bgImage=""
                description="Protect your workforce with reliable safety equipment and PPE solutions designed to meet workplace safety standards across multiple industries."
                cards={logisticsCards}
            /> */}
    </div>




            <Footer/>

        </div>

              );

}


export default Services;