import Navbar from "../components/navbar";
import Footer from "../components/footer";


const About = () => {
    return(
        <div className="about">
            <Navbar/>


            <section className="intro">
                <h1>About Us</h1>
                 <h3>
          We Are A Branding And General Supplies Company
          <br />
          We Deliver Professional Merchandise, Uniforms, And Workplace Essentials
          That Help Organizations Look Consistent, Safe, And Credible.
        </h3>
            </section>

            <section className="mission">
                <h1>Our Mission</h1>
                 <h3>
          We Deliver Professional Merchandise, Uniforms, And Workplace Essentials
          That Help Organizations Look Consistent, Safe, And Credible.
        </h3>

            </section>

             <section className="vision">
                <h1>Our Vision</h1>
                 <h3>
          We Are A Branding And General Supplies Company
          
        </h3>

            </section>


             <section className="values">
                <h1>Our Values</h1>
                 <h3>
                    <ul>
                        <li>Excellence</li>
                        <li>Quality</li>
                        <li>Precision</li>
                        <li>Professionalism</li>
                        <li>Integrity</li>

                    </ul>
          
        </h3>

            </section>








            <Footer/>
        </div>





    )



}