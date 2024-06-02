import React from 'react';
import Logo1 from './assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Courses-sub.css';
import bgm from './assets/lang13.avif'
import eng from './assets/engli.avif';
import ger from './assets/germ.avif';

const Languages: React.FC = () => {
  return (
    <div>
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
      <div className="main-content">
        <div className="heading-area" style={{backgroundImage: `url(${bgm})`}}>
          <h1>Language Courses</h1>
          
        </div>
        <div className="panel-list">
          <div className="panels" style={{backgroundImage: `url(${eng})`}}>
            <h2>English</h2>
            
          </div>
          <div className="panels" style={{backgroundImage: `url(${ger})`}}>
            <h2>German</h2>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
