import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/Artisanlogo.png" alt="Company Logo" />
        </div>
        <div className="footer-separator"></div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3>About Artisan Echoes Interactive</h3>
            <p>We are a game studio dedicated to amplifying the voices of real artists through interactive digital experiences.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@artisanechoes.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="https://www.instagram.com/playstation/?hl=en" target="_blank"><img src="/images/insta.png" alt="Instagram" /></a></li>
              <li><a href="https://twitter.com/PlayStation" target="_blank"><img src="/images/xtransparent.png" alt="X" /></a></li>
              <li><a href="https://www.facebook.com/playstation/" target="_blank"><img src="/images/meta.png" alt="Facebook" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Artisan Echoes Interactive ®</p>
      </div>
    </footer>
  );
}

export default Footer;

