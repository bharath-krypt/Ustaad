import React from 'react';
import './Courses.css';  // Import the CSS file
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
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><a href="/user"><FontAwesomeIcon icon={faUser} /></a></li>
        </ul>
      </div>
    <div className="about-us-container">
      <div className="about-us-box">
        <h1 className="about-us-title">Coming <span>soon !</span></h1>
        
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
