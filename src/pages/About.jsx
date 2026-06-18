import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/about.css";



const About = () => {
    return(
        <div className="about">
            <Navbar/>


            <section className="intro">
                <h1>About Us </h1>
                    <h2>
                    One Brand, One Standard, One Aureus 
                    </h2>
                 <h3>
          Aureus Company Limited is a dynamic and professionally driven supply and procurement company
committed to delivering high-quality products and dependable business solutions across diverse
industries.
          <br />
        
Founded on the principles of reliability, efficiency, and excellence, we specialize in the supply of
personal protective equipment (PPE), corporate branding solutions, industrial supplies, safety wear,
uniforms, promotional merchandise, and general procurement services. <br/>
At Aureus Company Limited, we understand that every client requires a trusted partner capable of
delivering quality products on time and within budget. Our approach combines professionalism,
strategic sourcing, and customer-focused service to ensure every project is executed with precision
and consistency.
We serve corporate organizations, government institutions, NGOs, schools, hospitals, construction
firms, manufacturing industries, and private enterprises.
        </h3>
            </section>

            <section className="mission">
                <h1>Our Mission</h1>
                 <h3>
          To become a leading and trusted supply and procurement partner recognized for excellence,
innovation, reliability, and customer satisfaction across Africa and beyond.
        </h3>

            </section>

             <section className="vision">
                <h1>Our Vision</h1>
                 <h3>
          To provide high-quality supply, branding, and procurement solutions through professionalism,
integrity, efficiency, and strategic partnerships while creating long-term value for our clients.
          
        </h3>

            </section>


             <section className="values">
                <h1>Our Values</h1>
                 
                    <ul>
                        <li>Excellence</li>
                        
                        <li>Reliability</li>
                        <li>Innovation</li>
                        <li>Customer Focus</li>
                        <li>Integrity</li>
                    </ul>
          
                 

            </section>

             


             <section className="promise">
                <h1>Our Promise</h1>
                <h2>We dont just supply Products, We Deliver Confidence</h2>
                 
                    <ul>
                        <li>Protect Your People</li>
                        
                        <li>Promote Your Brand</li>
                        <li>Partner With Experts</li>
                        <li>Grow Together</li>
                        
                    </ul>
          
                 

            </section>









            <Footer/>
    


    

    </div>





    );



};

export default About;

