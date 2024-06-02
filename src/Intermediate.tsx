import React from 'react';
import Logo1 from './assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Courses-sub.css';
import bgm from './assets/interme.jpg';
import phy from './assets/phy.jpg';
import mat from './assets/mat.avif';
import chem from './assets/chem.jpg';
import bio from './assets/nio.avif';

const Intermediate: React.FC = () => {
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
          <h1>Intermediate Courses</h1>
          
        </div>
        <div className="panel-list">
          <div className="panels" style={{backgroundImage: `url(${mat})`}}>
            <h2>Maths</h2>
          </div>
          <div className="panels" style={{backgroundImage: `url(${phy})`}}>
            <h2>Physics</h2>
          </div>
          <div className="panels" style={{backgroundImage: `url(${chem})`}}>
            <h2>Chemistry</h2>
          </div>
          <div className="panels" style={{backgroundImage: `url(${bio})`}}>
            <h2>Biology</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intermediate;
