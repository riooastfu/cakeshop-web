import React from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ltpkfem', 'template_ou3e3xh', form.current, 'fCZ6SL5tpup7EHAEN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    const notify = () => {
        toast.success('Email Successfully Sent!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Contact Us</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Any questions? Send me an email.</p>
                </div>

                <form ref={form} action="" className="contact__form" onSubmit={sendEmail}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insert your name' name='name' />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder='Insert your email' name='email' />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder='Insert your subject' name='subject' />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
                    </div>

                    <input type="submit" value="Send Message" className="btn" onClick={notify} />
                    <ToastContainer
                        position="bottom-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                    />

                    {/* <button className="btn">Send Message</button> */}
                </form>
            </div>
        </section>
    )
}

export default Contact