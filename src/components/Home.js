import React from "react";
import './Home.css';
import ScrollIndicator from '../pics/scrollIndicator.gif';


function Home() {
    return (
        <header id="home" className="header">
            <div className="header-content">
                <h1>TAL BARDA</h1>
                <p>SOFTWARE ENGINEER, FULL STUCK & GAME DEVELOPER.</p>
                <a href="#about"><img src={ScrollIndicator} alt="Scroll down" className="scroll-down-indicator"/></a>
                
            </div>
        </header>
    );
}

export default Home;