import React from 'react';
import './AboutUs.css';  // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import Logo1 from './assets/logo.png';
import { Link } from 'react-router-dom';


const AboutUs: React.FC = () => {
  return (
    <div className='abt-cont'>
      <div className="navbar">
        <div className="logo">
          <img src={Logo1} alt="Logo1" />
        </div>
        <ul>
          <li><Link to="/Ustaad/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          {/* <li><a href="#placements">Placements</a></li>
          <li><a href="#facilities">Facilities</a></li> */}
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/user"><FontAwesomeIcon icon={faUser} /></a></li>
        </ul>
      </div>
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
    </div>
  );
};

export default AboutUs;
