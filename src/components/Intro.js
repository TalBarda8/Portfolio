import React from 'react';
import './Intro.css';
import TalImage from "../pics/TalImage.png";
import SoftwareDevIcon from "../pics/softwareDevIcon.png"; 
import FullstackDevIcon from "../pics/fullstuckDevIcon.png";
import UnityDevIcon from "../pics/unityDevIcon.png";

function Intro() {
    return (
        <section id="about" className="intro">
            <div className="intro-header">
                <h2>LET ME INTRODUCE MYSELF</h2>
            </div>
            <div className="intro-content"> 
                <div className="intro-profile">
                    <img src={TalImage} alt="Tal Barda" className="intro-image" />
                </div>
                <div className="intro-description">
                    <p>
                    I'm a  <b>Fullstack Developer</b> building web applications, using <b>React</b> framework for the frontend and <b>NodeJS</b> for the backend.
                    </p>
                    <p>
                    I'm also a <b>Game Developer</b> using <b>Unity engine</b> to build games in 2D, 3D and VR. You can find more of my games on my <a href='https://talbarda.itch.io/'><b>itch.io profile</b></a>.
                    </p>
                    <p>
                    I'm interested in jobs where I can learn, grow, and contribute. If you have a good opportunity that matches my skills and experience - don't hesitate to contact me.
                    </p>
                </div>
            </div>
            <div className="expertise-container">
                <div className="expertise">
                    <div className="expertise-header">
                        <img src={SoftwareDevIcon} alt="Software Development" className="expertise-icon" />
                        <h3>Software<br/>Development</h3>
                    </div>
                    <p>Experienced in both OOP and functional: C#, Python, Java, C++, C.</p>
                </div>
                <div className="expertise">
                    <div className="expertise-header">
                        <img src={FullstackDevIcon} alt="Fullstack Development" className="expertise-icon" />
                        <h3>Fullstack Dev<br/>React, NodeJS</h3>
                    </div>
                    <p>Development experience in HTML, CSS, JS, React and NodeJS frameworks as Express.js, Socket.io and REST APIs.</p>
                </div>
                <div className="expertise">
                    <div className="expertise-header">
                        <img src={UnityDevIcon} alt="Unity Development" className="expertise-icon" />
                        <h3>Unity Dev<br/>2D, 3D, VR</h3>
                    </div>
                    <p>Skilled in developing gaming experiences and interactive applications using Unity.</p>
                </div>
            </div>
        </section>
    );
}

export default Intro;
