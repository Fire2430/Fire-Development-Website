import React from 'react';
import './header.css';

// ... (rest of the imports)

function Header() {
    return (
      <header className="header">
        <div className="logo">
        <img src="./logo.png" alt="Your Brand Logo" width="85" /> {/* Adjust width as needed */}
      </div>  
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/login" className="login-btn">Login</a>
        </nav>
      </header>
    );
  }
  
  export default Header;
  