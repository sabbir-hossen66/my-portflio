import React from 'react';
import './Contact.css'
import contact from './image/contact.png'
const Contact = () => {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for OpenToWork work. Connect with me via phone:</p>
                            <p className="color"><h5>+88 01783780066</h5> <span className='white'>or email</span> <h5>sabbirhossen.sh66@gmail.com</h5></p>
                        </div>
                        <div className="input__box">
                            <input type="text" className="contact name" placeholder="Your name *" />
                            <input type="text" className="contact email" placeholder="Your Email *" />
                            <input type="text" className="contact subject" placeholder="Write a Subject" />
                            <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                            <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contact} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact;