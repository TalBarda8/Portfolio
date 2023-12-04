import React, {useState} from 'react';
import './NavBar.css';
import humburgerMenuImage from "../pics/humburgerMenuImage.png";
import githubLogo from "../pics/githubLogo.png";
import linkedinLogo from "../pics/linkedinLogo.png";
import cvImage from "../pics/cvImage.png";
import cvPDF from "../pics/Tal-Barda-CV.pdf";

function NavBar() {
    const [burgerNavActive, setBurgerNavActive] = useState(false);

    const toggleNav = () => {
        setBurgerNavActive(!burgerNavActive); 
    };

    return (
        <nav className="navbar">
            <div className="hamburger-menu" onClick={toggleNav}>
                <img src={humburgerMenuImage} alt="Humburger Menu Icon" />
            </div>
            <ul className={`nav-links ${burgerNavActive ? 'nav-active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/TalBarda8" target="_blank" rel="noopener noreferrer">
                    <div className="image-container">
                        <img src={githubLogo} alt="GitHub Logo" />
                    </div>
                </a></li>
                <li><a href="https://www.linkedin.com/in/talbarda/" target="_blank" rel="noopener noreferrer">
                    <div id='linkedin-logo' className="image-container">
                        <img src={linkedinLogo} alt="LinkedIn Logo" />
                    </div>
                </a></li>
                <li><a href={cvPDF} download="Tal Barda CV" target="_blank" rel="noopener noreferrer">
                    <div className="image-container">
                        <img src={cvImage} alt="CV download" />
                    </div>
                </a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
