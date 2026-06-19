import { useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";





const Contact = () => {
        const form = useRef();


        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
                .sendForm(
                    "service_la20ven",
                    "template_j5nn4m8",
                    form.current,
                    "Tc0LBRfZQ5ctQPuFQ"

                )
                .then(
                    () => {
                        alert("Sent!");
                        form.current.reset();

                    },
                    (error) => {
                        console.log(error.text);
                        alert("Error, Kindly try sending again");
                    }
                );


        };



        return(
            <div className="contact">
                <Navbar/>

                <section className="heading">
                    <h1>Contact Us</h1>

                

                </section>
                <section className="contact-details-card">
                <section className="contact-details">
                    <p className="p_name">Get in Touch with one of our professionals for a quote or Inquiry through:</p><br/>
             <p>
        <MdEmail className="contact-icon" />
                <a href="mailto:info@aureus.co.ke">
            info@aureus.co.ke
            </a>
             </p>

            <p>
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+254721885458">
                    +254 721 885 458
                </a>
            </p>

            <p>
                <FaLocationDot className="contact-icon" />
                New Commercial House, Industrial Area - Nairobi, Kenya
            </p>
            </section>
            </section>
                <section>
                    <div className="contact_form">
                        <i><h3>OR Kindly fill the Form Below</h3></i>
                        <h3>Mandatory Fields are Marked with an Asterisk(*)</h3>
                         <form ref={form} onSubmit={sendEmail}>

                            <label>Inquiry Type</label> <br/>
                            <select id="inquiry" name="inquiry">  
                                <option value="PPEs Inquiry">PPEs Inquiry</option>
                                <option value="General Supplies Inquiry">General Suplies Inquiry</option>
                                <option value="Corporate Branding Inquiry">Corporate Branding Inquiry</option>
                                <option value="Other Inquiry">Other Inquiry</option>
                            </select>

                            <br/>
                            <label>Full Name *</label>
                            <br/>
                            <input name="client" type="text"></input>
                            <br/>
                            <label>Email Address * </label>
                            <br/>
                            <input name="email" type="email"></input>
                            <br/>
                            <label>Phone Number</label>
                            <br/>
                            <input name="number" type="tel"></input>
                            <br/>
                            <label>Company / Organisation</label>
                            <br/>
                            <input name="org" type="text"></input>
                            <br/>
                            <label>Message *</label> 
                            <br/>
                            <textarea name="message" rows="6" required>

                            </textarea>
                            <br/>

                            <button type="submit">
                                Submit
                            </button>
                            
                         </form>

                    </div>


                </section>

                <Footer/>
            </div>

        );



};

export default Contact;