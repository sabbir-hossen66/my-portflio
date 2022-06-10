import React from 'react';
import './Chair.css'
import chair from './image/project/teach.PNG'
import chair1 from './image/project/teach2.PNG'
import chair2 from './image/project/teach3.PNG'
const Chair = () => {
    return (
        <div>
            <div className="display">
                <div className='category-style'>

                    <img height={150} src={chair} alt="" />
                </div>

                <div className='category-style'>

                    <img height={150} src={chair1} alt="" />

                </div>

                <div className='category-style'>

                    <img height={150} src={chair2} alt="" />


                </div>
            </div>
            <div className='container'>
                <div className='text'>
                    <h1>This Warehouse projects overview:</h1>

                    <h2>This project home page has 9 section</h2>
                    <h2>Here has protected route</h2>
                    <h2>This project has order section,add book section</h2>
                    <h2>In this project i install react-hook form,firebase,daisy-ui,react-router dom</h2>
                    <h2>Here i use front-end technology and also have back-end "node.js,mongodb,express.js,heroku added</h2>
                </div>
            </div>

            <div className='button-link'>
                <a href="https://teach-pitch-project.web.app/"><button className='about btn pointer'>Live-site link</button></a>
                <br /><br />
                <a href="https://github.com/sabbir-hossen66/independent-service"><button className='about btn pointer'>GitHub-link</button></a>

            </div>

        </div>

    );
};

export default Chair;