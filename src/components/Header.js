import React from "react";
import './Header.css';
import HeaderImage from '../pics/headerPic.png';


function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Hi there,</h1>
                <p>I'm Tal Barda, a Software Developer</p>
            </div>
            <div className="header-image">
                <img src={HeaderImage} alt="Computer" />
            </div>
        </header>
    );
}

export default Header;
