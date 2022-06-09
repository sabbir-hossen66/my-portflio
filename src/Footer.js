import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <footer className='footer-style text-info  col-sm-12 col-md-6 col-lg-4 fs-4 mt-5'>
            <div className='d-flex'>

                <div className='left-side'>
                    <div className='left-name'>Sabbir Hossen</div>
                    <h6 className='style'>Don't copyright © {year}</h6>
                </div>


                <div className='social'>
                    <a className='space' href="https://www.facebook.com/"><BsFacebook /></a>
                    <a href="https://www.linkedin.com/in/sabbir-hossen66/"><BsLinkedin /> </a>
                    <a href="https://github.com/sabbir-hossen66"><BsGithub /> </a>

                </div>
            </div>



        </footer>
    );
};

export default Footer;