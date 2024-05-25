import './Footer.css'; // Import the CSS styles for the footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import LogoImage from './assets/logo.png';


const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <h4 style={{paddingLeft:'25px'}}>About us</h4>
        <img src={LogoImage} alt="Logo" className='logo1'/>
        <p>
          <strong>Vision:</strong> To solve the generational problem -
          Unemployability, we have experts on board with us who will help you unlock
          your true potential.
        </p>
        <p>
          <strong>Contact:</strong> +91 12111 36595/+91 62549 35965
        </p>
        <p>
          <strong>Email:</strong> edtechstartup@gmail.com
        </p>
        <div className="follow">
          <h4 >Follow us</h4>
          <div className="icon">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <h4 >Account</h4>
        <a href="#">Sign-In</a>
        <a href="#">Enroll</a>
        <a href="#">Courses</a>
        <a href="#">Programs</a>
        <a href="#">Need help</a>
      </div>



      <br />

      <div className="copyright">
        <p>© All Copyrights Reserved - February, 2024 , Edtech - startup </p>
        <p>
          <strong> - P. Bharath Kumar </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
