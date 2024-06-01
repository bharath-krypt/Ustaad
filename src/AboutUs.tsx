import React from 'react';
import './AboutUs.css';  // Import the CSS file

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-box">
        <h1 className="about-us-title">About <span>Ustaad</span></h1>
        <p className="about-us-text">
          Ustaad is an organization dedicated to providing guidance and skills for students to achieve their goals. We leverage industry experts to create and deliver industry-specific skills and knowledge.
        </p>
        <p className="about-us-text">
          Our goal is to empower students with the necessary tools and resources to succeed in their chosen field. Whether it's through mentorship, workshops, or online courses, we strive to support students in their journey towards success.
        </p>
        <p className="about-us-text">
          At Ustaad, we believe in the power of education and mentorship to transform lives and shape the future.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
