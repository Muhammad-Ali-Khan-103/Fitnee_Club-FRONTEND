import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import the single CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Fitness_Club</Link>
      </div>
      <div className="navbar-right">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
