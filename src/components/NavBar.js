import React from 'react';
import './NavBar.css';
import githubLogo from "../pics/github-mark.png";
import cvImage from "../pics/cvIcon.png";

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="https://github.com/TalBarda8" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Logo" />
                </a></li>
                <li><a href="https://github.com/TalBarda8" target="_blank" rel="noopener noreferrer">
                    <img src={cvImage} alt="CV download" />
                </a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
