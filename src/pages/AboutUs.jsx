// About.js
import React from 'react';
import './About.css'; // Ensure the correct import path for your CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to [Pet Adoption Center Name], your trusted partner in finding a loving home for every pet. Our mission is to connect pets with caring families and individuals. We believe every pet deserves a chance to live a happy, healthy life with a family that loves them.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a safe and nurturing environment for homeless pets while they await their forever homes. We strive to educate the community on the importance of pet adoption and responsible pet ownership.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>Rescue and rehabilitate abandoned and stray pets.</li>
          <li>Provide medical care and vaccinations for all our animals.</li>
          <li>Facilitate the adoption process to ensure every pet finds the right home.</li>
          <li>Offer resources and support for new pet owners.</li>
        </ul>
      </div>

      <div className="about-section2">
        <h2>Get Involved</h2>
        <p>
          There are many ways to get involved and make a difference in the lives of pets in need. You can adopt, volunteer, foster, or donate to support our cause. Together, we can ensure every pet gets a chance at a happy life.
        </p>
      </div>
    </div>
  );
};

export default About;
