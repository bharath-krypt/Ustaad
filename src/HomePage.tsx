import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import TopBox from './TopBox.tsx'; // Import the TopBox component
import bannerImage from './assets/banner1.jpg'; // Import your banner image
import adminImage from './assets/admin.jpg'; // Import your admin image
import studentImage from './assets/stud.jpg'; // Import your student image
import facultyImage from './assets/facul.jpg'; // Import your faculty image
import vaasdwImage from './assets/vaasdw.jpeg';
import expertFac from './assets/expertfac.jpg';
import curriculum from './assets/ddsd.png';
import rad from './assets/rd.webp';
import inco from "./assets/inc.jpeg";
import cg from './assets/cg.jpeg';
import Footer from './Footer.js'; // Import the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import Logo1 from './assets/logo.png';

const HomePage = () => {
  const [showTopBox, setShowTopBox] = useState(true);

  const handleCloseTopBox = () => {
    setShowTopBox(false);
  };

  return (
    <div>
      {showTopBox && <TopBox onClose={handleCloseTopBox} />} {/* Render the TopBox component */}
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
          <li><Link to="/user"><FontAwesomeIcon icon={faUser} /></Link></li>
        </ul>
      </div>
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
        <div className="banner-text">
          <p>lets</p>
          <p>build</p>
          <p>your</p>
          <p><span style={{ color: "#099fdb" }}>Career</span></p>
        </div>
      </div>
      <br />
      <br />
      <div className="welcome-message">
        <h2>Welcome</h2>
        <hr className="separator" />
        <h3>Choose your profile</h3>
      </div>
      <div className="spacer"></div>
      <div className="home-page">
        <div className="panel admin">
          <img src={adminImage} alt="Admin" />
          <h2>Admin</h2>
          <p>Access admin functionalities.</p>
        </div>
        <div className="panel student">
          <img src={studentImage} alt="Student" />
          <h2>Student</h2>
          <p>Explore student resources.</p>
        </div>
        <div className="panel faculty">
          <img src={facultyImage} alt="Faculty" />
          <h2>Faculty</h2>
          <p>Faculty-specific tools and information.</p>
        </div>
      </div>
      <section id="banner" className="section-m1">
        <h4>Innovate - Integrate - Inspire</h4>
        <h2> Join us Kick start you <span>career</span></h2>
        <button className="normal" onClick={() => window.location.href = 'student.html'}>Start here</button>
      </section>
      <br />
      <br />
      <br />
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={vaasdwImage} alt="" />
          <h6>Industry experts</h6>
        </div>
        <div className="fe-box">
          <img src={expertFac} alt="" />
          <h6>Expert faculty</h6>
        </div>
        <div className="fe-box">
          <img src={curriculum} alt="" />
          <h6>focused curriculam</h6>
        </div>
        <div className="fe-box">
          <img src={rad} alt="" />
          <h6>R & D</h6>
        </div>
        <div className="fe-box">
          <img src={inco} alt="" />
          <h6>Incubation center</h6>
        </div>
        <div className="fe-box">
          <img src={cg} alt="" />
          <h6>career guidance</h6>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;
