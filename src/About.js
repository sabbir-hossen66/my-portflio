import React from 'react';
import './About.css'
import aboutImg from './image/sabbir.png'
const About = () => {
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
                 An Aspiring Web Engineer.Always try to seek knowledge.My obsession is to make beautiful looking and user friendly web site
                      </p>
                      <div className="about__button d__flex align__items__center">
                      <a href="#"><button className='about btn pointer'>Download Resume</button></a>
                      <a href="#"><button className='about btn pointer'>Hire Me</button></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default About;