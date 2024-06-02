import React from 'react';
import Logo1 from './assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Courses-sub.css';
import bgm from './assets/profcoc.jpg';
import flu from './assets/fulsta.avif';
import te from './assets/test.webp';
import bip from './assets/bip.jpg';
import ta from './assets/tab.png';
import fron from './assets/fronc.jpg';
import bac from './assets/bace.svg';

const Professional: React.FC = () => {
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
          <h1>Professional Courses</h1>

        </div>
        <div className="panel-list">
          <div className="panels" style={{backgroundImage: `url(${flu})`}}>
            <h2>Full Stack</h2>
            
          </div>
          <div className="panels" style={{backgroundImage: `url(${te})`}}>
            <h2>Testing</h2>
            
          </div>
          <div className="panels" style={{backgroundImage: `url(${bip})`}}>
            <h2>Power Bi</h2>
            
          </div>
          <div className="panels" style={{backgroundImage: `url(${ta})`}}>
            <h2>Tableau</h2>
            
          </div>
          <div className="panels" style={{backgroundImage: `url(${fron})`}}>
            <h2>Frontend</h2>
            
          </div>
          <div className="panels" style={{backgroundImage: `url(${bac})`}}>
            <h2>Backend</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
