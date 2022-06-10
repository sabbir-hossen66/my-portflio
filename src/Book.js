import React from 'react';
import './Book.css'
import book from './image/project/book1.PNG'
import book1 from './image/project/book2.PNG'
import book2 from './image/project/book3.PNG'
const Book = () => {
    return (
        <div>
            <div className="display">
                <div className='category-style'>

                    <img height={150} src={book} alt="" />
                </div>

                <div className='category-style'>

                    <img height={150} src={book1} alt="" />

                </div>

                <div className='category-style'>

                    <img height={150} src={book2} alt="" />


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
                <a href="https://wonder-of-books-house.web.app/"><button className='about btn pointer'>Live-site link</button></a>
                <br /><br />
                <a href="https://github.com/sabbir-hossen66/warehouse-management"><button className='about btn pointer'>Client-site link</button></a>
                <br /><br />
                <a href="https://github.com/sabbir-hossen66/warehouse-management-server-side"><button className='about btn pointer'>Client-site link</button></a>
            </div>

        </div>

    );
};

export default Book;