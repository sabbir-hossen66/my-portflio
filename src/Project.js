import React from 'react';
import './Project.css';
import project1 from './image/project1.PNG'
import project2 from './image/project-2.PNG'
import Project3 from './image/project3.PNG'
import Project4 from './image/project4.PNG'
import project5 from './image/project-5.PNG'
import project6 from './image/project-6.PNG'
import { Link, useNavigate } from 'react-router-dom';

const Project = () => {
    const navigate = useNavigate();
    return (
        <div className='project component__space' id='Portfolio'>
            <div className="heading">
                <h1 className="heading">My New Project</h1>
                <p className="heading p__color">
                    I am showing some of my own projects here,
                </p>
                <p className='heading p__color'>it may be possible to add better features in the future.</p>
            </div>
            <div className="container">
                <div className="row">
                    {/* <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className='project__text'>Development</h5>
                                <div className="project__text">Getting tickets to the big show</div>
                                <a href="#" className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div> */}


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__tex">Manufacturer website</h5>
                                <h4 className="project__text">Full Stack Project</h4>
                                {/* <button onClick={() => navigate("/manufactur")} className="project__btn">View Details</button> */}
                                <a href="/manufactur" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Book warehouse website</h5>
                                <h4 className="project__text">Full Stack Project</h4>
                                <a href="/book" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    {/* <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={project5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Getting tickets to the big show</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div> */}


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={project5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Comfortable Chair</h5>
                                <h4 className="project__text"> React.js project</h4>
                                <a href="/chair" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <a href="/allProjects"><button className="view__more pointer btn"> Page link</button></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;