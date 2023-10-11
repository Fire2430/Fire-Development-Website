import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/logo.png" alt="Your Brand Logo" width="50" /> {/* Adjust width as needed */}
      </div>
      <div className="links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="social-media">
        <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://x.social/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" /> {/* Using Twitter icon for X as a placeholder */}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
