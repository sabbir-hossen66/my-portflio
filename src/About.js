import React from 'react';
import './About.css'
import aboutImg from './image/sabbir.png'
const About = () => {
    // up to to btn
    window.addEventListener('scroll', function () {
        const upToTop = this.document.querySelector('a.bottom__to__top');
        upToTop.classList.toggle('active', window.scrollY > 0)
    });
    return (
        <div className='about component __space'>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={aboutImg} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">
                            About Me
                        </h1>
                        <p className="about__text p__color">
                            An Aspiring Web Engineer.Always try to seek knowledge.My obsession is to make beautiful looking and user friendly web site.
                        </p>
                        <p className="about__text p__color">
                            My obsession is to make beautiful looking and user friendly web site. I create websites with a combination of different libraries and frameworks. I have good skills on React, JavaScript, CSS (Bootstrap-Tailwind),Html5 && Node,Mongodb. Also I have created some full-stack web site by using node.js and mongoDB.
                        </p>
                        <div className="about__button d__flex align__items__center">

                            <a href="#"><button className='about btn pointer'>Hire Me</button></a>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="up__to__top__btn">
                <a href="#" className='bottom__to__top'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default About;