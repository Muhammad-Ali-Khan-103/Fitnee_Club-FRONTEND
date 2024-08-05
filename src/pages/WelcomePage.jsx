import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the import path if necessary
import '../index.css'; // Import the single CSS file

const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="welcome-content">
        <h2>Welcome to the Fitness Club!</h2>
        <img
          src="/welcome page.png" // Ensure this path is correct
          alt="Welcome to Fitness Club"
          className="welcome-image"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
