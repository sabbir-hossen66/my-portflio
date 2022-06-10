import React from 'react';
import './MySkill.css'
import skill from './image/skill.png'
const MySkill = () => {
    return (
        <div className='body'>
            <h1 className='skill-style'>My Skill Highlight</h1>
            <div>
                <span className='style-skill'>HTML5,CSS,React.js,Javascript are my special skill</span>
                <p className='style-skill'>Node.js,Mongodb,express.js are Comfortable</p>
            </div>
            <img height={450} src={skill} alt="" />
        </div>
    );
};

export default MySkill;