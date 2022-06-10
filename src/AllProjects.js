import React from 'react';
import './AllProjects.css'
const AllProjects = () => {
    return (
        <div>
            <marquee behavior="alternative" direction="down"><h1 className='title'>Here are all projects page link</h1></marquee>
            <div className='link-page'>
                <a href="/manufactur"><button className='about btn pointer'>Manufacture Page</button></a><br /><br />
                <a href="/book"><button className='about btn pointer'>Book Page</button></a><br /><br />
                <a href="/manufactur"><button className='about btn pointer'>Teach Page</button></a>
            </div>
        </div>
    );
};

export default AllProjects;