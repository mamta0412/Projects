import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src= "../img/paw-solid.svg" alt="Logo"/>
        </div>
        <div className="navbar-links">
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/aboutus">About</Link>
        </li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
        </div>
        <div className="navbar-icons">
          <button className="icon-button">
            <span className="sr-only">Search</span>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6zM10 4l2 2M4 10l-2-2m4 4l4 4" />
            </svg>
          </button>
          <button className="login-button">Login</button>
        </div>
      </div>
    </nav>
  
</>
  );
}

export default Navbar;
