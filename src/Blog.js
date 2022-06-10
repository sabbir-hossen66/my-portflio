import React from 'react';
import './Blog.css'
import code from './image/code1.PNG'
import about from './image/summary.jpg'
import remot from './image/remot.png'
const Blog = () => {
    return (
        <div id='Blog'>
            <h1 className='blog-styles'>My Blog Site</h1>
            <marquee behavior="altarnative" direction="up"> <h1 className='blog-style'>Coming Soon</h1></marquee>
        </div>
        // <div className='blog component__space' id='Blog'>
        //     <div className="heading">
        //         <h1 className="heading">My Latest News</h1>
        //         <p className="heading p__color">
        //             My updated news can be found here
        //         </p>
        //     </div>
        //     <div className="container">
        //         <div className="row">
        //             <div className="col__3">
        //                 <div className="project__box pointer relative">
        //                     <div className="project__box__img pointer relative">
        //                         <div className="project__img__box">
        //                             <img src={code} alt="" className="project__img" />
        //                         </div>
        //                         <div className="mask__effect"></div>
        //                     </div>
        //                     <div className="Blog__meta absolute">
        //                         <h5 className="project__text">See my code</h5>
        //                         <h4 className="project__text">How i organize my work with code</h4>
        //                         <a href="#" className="blog project__btn btn">Read More</a>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="col__3">
        //                 <div className="project__box pointer relative">
        //                     <div className="project__box__img pointer relative">
        //                         <div className="project__img__box">
        //                             <img src={about} alt="" className="project__img" />
        //                         </div>
        //                         <div className="mask__effect"></div>
        //                     </div>
        //                     <div className="Blog__meta absolute">
        //                         <h5 className="project__text">See my project summary</h5>
        //                         <h4 className="project__text">Here is a summary of my project</h4>
        //                         <a href="#" className="blog project__btn btn">Read More</a>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="col__3">
        //                 <div className="project__box pointer relative">
        //                     <div className="project__box__img pointer relative">
        //                         <div className="project__img__box">
        //                             <img src={remot} alt="" className="project__img" />
        //                         </div>
        //                         <div className="mask__effect"></div>
        //                     </div>
        //                     <div className="Blog__meta absolute">
        //                         <h5 className="project__text">My work place</h5>
        //                         <h4 className="project__text">There is a place where I work</h4>
        //                         <a href="#" className="blog project__btn btn">Read More</a>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
    );
};

export default Blog;