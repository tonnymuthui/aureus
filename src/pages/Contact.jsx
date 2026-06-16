import { useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import emailjs from "@emailjs/browser";




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
                <section>
                    <p>Get in Touch with one of our professionals through for a quote or Inquiry: <br/> <br/>

                        📩 info@aurelius.co.ke<br/> 
                        📞 0712345678
                        <br/> <br/>
                        or fill the form below</p>

                </section>
                <section>
                    <div className="contact_form">
                        <h2>Mandatory Fields are Marked with an Asterisk(*)</h2>
                         <form ref={form} onSubmit={sendEmail}>

                            <label></label>
                            <select id="inquiry" name="inquiry">
                                <option value="PPEs Inquiry">PPEs Inquiry</option>
                                <option value="Workwear Inquiry">WorkWear Inquiry</option>
                                <option value="Corporate Branding Inquiry">PPEs Inquiry</option>
                                <option value="Other Inquiry">Other Inquiry</option>
                            </select>


                            <label>Full Name</label>
                            <input name="client" type="text"></input>

                            <label>Email Address * </label>
                            <input name="email" type="email"></input>

                            <label>Phone Number</label>
                            <input name="number" type="numbeer"></input>

                            <label>Company / Organisation</label>
                            <input name="org" type="text"></input>

                            <label>Message *</label>
                            <textarea name="message" rows="6" required>

                            </textarea>

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