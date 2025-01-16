import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-content">
          {/* Left Side - Logo */}
          <div className="navbar-logo">
            <h1 className="navbar-logo-text">Charitio</h1>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Causes</a>
            <a href="#" className="nav-link">Shop</a>
            <a href="#" className="nav-link">Pages</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>
          </div>

          {/* Right Side - Buttons */}
          <div className="nav-buttons">
            <button className="donate-button">
              Donate Now
            </button>
            <button className="search-button">
              <FiSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
