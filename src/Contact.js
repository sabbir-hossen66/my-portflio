import React from 'react';
import './Contact.css'
import contact from './image/contact.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c3p6o9w', 'template_lc8amom', e.target, 'jkIwAIfgz3oozO9u7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <img src={contact} alt="" className="contact__img" />
                </div>
                <div className="col__2">

                    <form onSubmit={sendEmail} className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for OpenToWork work. Connect with me via phone:</p>
                            <p className="color"><h5>+88 01783780066</h5> <span className='white'>or email</span> <h5>sabbirhossen.sh66@gmail.com</h5></p>
                        </div>
                        <div className="input__box">
                            <input name="name" type="text" className="contact name" placeholder="Your name *" required />
                            <input name="email" type="email" className="contact email" placeholder="Your Email *" required />
                            <input name="subject" type="text" className="contact subject" placeholder="Write a Subject" required />
                            <textarea name="message" id="message" placeholder="Write Your message" required></textarea>
                            <button className=" btn contact pointer" type="submit">Submit</button>
                        </div>
                    </form>

                </div>
                {/* <div className="col__2">
                    <img src={contact} alt="" className="contact__img" />
                </div> */}
            </div>
        </div>
    )
}

export default Contact;