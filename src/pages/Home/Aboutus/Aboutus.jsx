import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1>About Us</h1>
        <div className="aboutus-grid">
          <div className="aboutus-section">
            <h2>Our Mission</h2>
            <p>We are dedicated to delivering exceptional value through innovative solutions, 
               fostering creativity, and building lasting relationships with our clients.</p>
          </div>
          
          <div className="aboutus-section">
            <h2>Our Vision</h2>
            <p>To be a leading force in transforming ideas into impactful solutions, 
               while maintaining the highest standards of excellence and integrity.</p>
          </div>

          <div className="aboutus-section">
            <h2>Our Values</h2>
            <ul>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </div>

          <div className="aboutus-section">
            <h2>Our Team</h2>
            <p>Our diverse team of experts brings together years of experience and 
               passion for creating meaningful solutions that make a difference.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
