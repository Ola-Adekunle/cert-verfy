// Footer.js
import React from 'react';
import { NavLink } from "react-router-dom";

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>A Certificate verification Website, to recieve and verify Certificates received from zidio learning platform. Contact us for more information!</p>
        </div>
        
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/services" exact>Services</NavLink></li>
            <li><NavLink to="/about" exact>About Us</NavLink></li>
            <li><NavLink to="/contact" exact>Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/adekunle-olatunbosun" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Ola-Adekunle" target="_blank" rel="noopener noreferrer">Github</a>
            <a href=" https://x.com/Ola_Ade_Abdul?t=o5gImVbJ5vV-0pBD9PpBKw&s=08" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MyWebsite | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
