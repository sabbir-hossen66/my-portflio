import React, { useState } from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import './Home.css';
import photo from './image/photostudio-6-designify-removebg-preview.png'
import MySkill from './MySkill';
import Project from './Project';
import Service from './Service';
import photo1 from './image/icon.svg'
window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 0)
});




const Home = () => {
    const [show, setShow] = useState(true)
    return (
        <div className='home' id='Home'>
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy__30">
                    <div className='logo'>
                        <img height={40} src={photo1} alt="" />
                    </div>
                    <div className="navigation pxy__30">
                        <ul className="navbar d__flex">
                            <a href="#Home"><li className='nav__items mx__15'>Home</li></a>
                            <a href="#About"><li className='nav__items mx__15'>About</li></a>
                            <a href="#Services"><li className='nav__items mx__15'>Services</li></a>
                            <a href="#Portfolio"><li className='nav__items mx__15'>Portfolio</li></a>
                            <a href="Sabbir_hossen.pdf" download="Sabbir_hossen.pdf"><li className='nav__items mx__15'>Resume</li></a>
                            <a href="#Blog"><li className='nav__items mx__15'>Blog</li></a>
                            <a href="#Contact"><li className='nav__items mx__15'>Contact</li></a>
                        </ul>
                    </div>
                    {/* toggle bar */}
                    <div className="toggle__menu">
                        <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify white pointer" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    {show ? (
                        <div className="sideNavbar">
                            <ul className="sidebar d__flex">
                                <li className="sideNavbar">
                                    <a href="#Home">Home</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#About">About</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Services">Services</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Portfolio">Portfolio</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Blog">Blog</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
                {/* Home content */}
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h1 className="home__text pz__10">
                                Welcome to my Portfolio
                            </h1>
                            <h2 className="home__text pz__10">
                                Hi,I'm Sabbir Hossen
                            </h2>
                            <h3 className="home__text sweet pz__10">
                                Web Developer
                            </h3><br />
                            <a href="Sabbir_hossen.pdf" download="Sabbir_hossen.pdf"><button className='about btn pointer'>Download Resume</button></a>

                        </div>
                    </div>
                    {/* extra div */}
                    <div>
                        <img src={photo} alt="" />
                    </div>
                    {/* end div */}
                </div>
            </div>
            <About />
            <Service />
            <Project />
            <Blog />
            <MySkill />
            <Contact />
        </div>

    );
};

export default Home;








