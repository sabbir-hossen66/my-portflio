import React from 'react';
import './Home.css';
import photo from './image/sabbir-removebg-preview222.png'
// import photo from './image/trydo.png'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy__30">
                    <div className='logo'>
                        {/* <img  src={photo} alt="" /> */}
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
                            </h3>

                        </div>
                    </div>
                    {/* extra div */}
                    <div>
                        <img src={photo} alt="" />
                    </div>
                    {/* end div */}
                </div>
            </div>
        </div>
    );
};

export default Home;