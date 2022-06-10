import React from 'react';
import './Manufactur.css'
import manu from './image/project/manu1.PNG'
import manu1 from './image/project/manu2.PNG'
import manu2 from './image/project/manu3.PNG'

const Manufactur = () => {
    return (
        <div>
            <div className="display">
                <div className='category-style'>

                    <img height={150} src={manu} alt="" />
                </div>

                <div className='category-style'>

                    <img height={150} src={manu1} alt="" />

                </div>

                <div className='category-style'>

                    <img height={150} src={manu2} alt="" />


                </div>
            </div>
            <div className='container'>
                <div className='text'>
                    <h1>This Manufacturer projects overview:</h1>

                    <h2>This project home page has 9 section</h2>
                    <h2>Here has protected route</h2>
                    <h2>This page has admin access</h2>
                    <h2>In this project i install react-hook form,firebase,daisy-ui,react-router dom</h2>
                    <h2>Here i use front-end technology and also have back-end "node.js,mongodb,express.js,heroku added</h2>
                </div>
            </div>

            <div className='button-link'>
                <a href="https://manufacturer-website-cfe3d.web.app/"><button className='about btn pointer'>Live-site link</button></a>
                <br /><br />
                <a href="https://github.com/sabbir-hossen66/manufacturer-client-side"><button className='about btn pointer'>Client-site link</button></a>
                <br /><br />
                <a href="https://github.com/sabbir-hossen66/manufacturer-server-side"><button className='about btn pointer'>Client-site link</button></a>
            </div>

        </div>

    );
};

export default Manufactur;