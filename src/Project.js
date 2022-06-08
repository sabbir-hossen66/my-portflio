import React from 'react';
import './Project.css';
import project1 from './image/project1.PNG'
const Project = () => {
    return (
        <div className='project component__space'>
              <div className="heading">
        <h1 className="heading">My New Project</h1>
        <p className="heading p__color">
        I am showing some of my own projects here, it may be possible to add better features in the future.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
                  <div className="project__box pointer">
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
              </div>
          </div>
      </div>
        </div>
    );
};

export default Project;