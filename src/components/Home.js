import React from "react";
import './Home.css';
import ScrollIndicator from '../pics/scrollIndicator.gif';


function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1>TAL BARDA</h1>
                <p>SOFTWARE ENGINEER, FULL STUCK & GAME DEVELOPER.</p>
                <img src={ScrollIndicator} alt="Scroll down" className="scroll-down-indicator"/>
            </div>
        </header>
    );
}

export default Header;