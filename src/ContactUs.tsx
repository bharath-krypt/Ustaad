import React from 'react';
import './ContactUs.css';  // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import Logo1 from './assets/logo.png'; 
import ContactImage from './assets/conta.avif'; // Import your image here
import { Link } from 'react-router-dom';

const ContactUs: React.FC = () => {
  return (
    <div className='contact-cont'>
      <div className="navbar">
        <div className="logo">
          <img src={Logo1} alt="Logo1" />
        </div>
        <ul>
          <li><Link to="/Ustaad/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><a href="/user"><FontAwesomeIcon icon={faUser} /></a></li>
        </ul>
      </div>
      <div className="contact-us-container">
        <div className="image-box">
          <img src={ContactImage} alt="Contact" />
        </div>
        <div className="contact-us-box">
          <h1 className="contact-us-title">Contact <span>Ustaad</span></h1>
          <p className="contact-us-text">
            For any inquiries or support, please reach out to our representative:
          </p>
          <p className="contact-us-text-t">
            <strong>Name:</strong> N. Pavan Kalyan
          </p>
          <p className="contact-us-text">
            <strong>Phone:</strong> +91 9396902994
          </p>
          {/* <p className="contact-us-text">
            <strong>Email:</strong> john.doe@ustaad.com
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
