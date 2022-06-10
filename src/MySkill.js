import React from 'react';
import './MySkill.css'
import skill from './image/skill.png'
const MySkill = () => {
    return (
        <div className='body'>
            <h1 className='skill-style'>My Skill Highlight</h1>
            <div>
                <h2 className='style-skill'>My Expertise Skills: HTML5,CSS,React.js,Javascript,React-router, </h2>
                <h2 className='style-skill'>Firebase,Bootstrap,Tailwind.</h2>
                <h3 className='style-skill'>My Comfortable Skills: Node.js,Mongodb,express.js.</h3>
            </div>
            <img className='mern-developer' src={skill} alt="" />
        </div>
    );
};

export default MySkill;