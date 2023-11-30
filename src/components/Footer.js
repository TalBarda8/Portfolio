import React from 'react';
import './Footer.css'; 
import githubLogo from "../pics/githubLogo.png";
import linkedinLogo from "../pics/linkedinLogo.png";
import cvImage from "../pics/cvImage.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                Designed and Developed by Tal Barda
            </div>
            <div className="footer-section">
                Copyright © {new Date().getFullYear()}
            </div>
            <div className="footer-section social-icons">
                <a href="https://github.com/TalBarda8" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Logo" />
                </a>
                <a href="https://www.linkedin.com/in/talbarda/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="Linkedin Logo" />
                </a>
                <a href="https://talbarda.itch.io/" target="_blank" rel="noopener noreferrer">
                    <img src={cvImage} alt="Itch.io Logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
