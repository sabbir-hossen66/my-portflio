import React from 'react';
import './Footer.css'
import { FaFacebook } from 'react-icons/fa';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <footer className='footer-style text-info  col-sm-12 col-md-6 col-lg-4 fs-4 mt-5'>
            <div className='d-flex'>

                <div>
                    <div className='left-name'>Sabbir Hossen</div>
                    <h6 className='style'>Don't copyright © {year}</h6>
                </div>


                <div className='social'>
                    <a className='icon-style' href="https://www.facebook.com/"><FaFacebook /></a>
                    <a className='icon-style' href="https://github.com/sabbir-hossen66"><FaGithubSquare /> </a>
                    <a className='icon-style' href="https://www.linkedin.com/in/sabbir-hossen66/"><BsLinkedin /> </a>

                </div>
            </div>



        </footer>
    );
};

export default Footer;