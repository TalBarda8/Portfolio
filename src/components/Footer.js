import React from 'react';
import './Footer.css'; 
import githubLogo from "../pics/githubLogo.png";
import linkedinLogo from "../pics/linkedinLogo.png";
import cvImage from "../pics/cvImage.png";
import cvPDF from "../pics/Tal-Barda-CV.pdf";

function Footer() {
    return (
        <footer id="contact" className="footer">
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
                <a href="https://www.linkedin.com/in/talbarda/" target="_blank" rel="noopener noreferrer" id='linkedin-logo'>
                    <img src={linkedinLogo} alt="Linkedin Logo" />
                </a>
                <a href={cvPDF} download="Tal Barda CV" target="_blank" rel="noopener noreferrer">
                    <img src={cvImage} alt="CV download" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
