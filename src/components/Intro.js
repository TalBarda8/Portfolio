import React from 'react';
import './Intro.css';
import TalImage from "../pics/TalImage.png";

function Intro() {
    return (
        <section className="intro">
            <div className="intro-text">
                <h2>LET ME INTRODUCE MYSELF</h2>
                <p>
                My experience ranges widely, from full stack development to game development with Unity.
                </p>
                <p>
                    I have experience with many aspects of full stack development, but I specialize in Node.js and React, along with related technologies like Express.js, Axios, SQL and noSQL databases and more. 
                </p>
                <p>
                    In addition, I am a Unity game developer, crafting experiences in both 2D and 3D, as well as in virtual reality. My passion for gaming and technology drives me to constantly explore new frontiers in game development.
                </p>
                <p>
                    Whether it's building web technologies, products, or immersive game experiences, I love the creative process and the opportunity to bring new ideas to life.
                </p>
            </div>
            <div className="intro-image">
                <img src={TalImage} alt="Your Name" />
            </div>
        </section>
    );
}

export default Intro;
