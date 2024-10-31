import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaYoutubeSquare } from "react-icons/fa";
import "../components/css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Codify</h3>
          <p>Learn to code with expert-led tutorials and hands-on projects. Join our community of developers today.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/roadmap">Roadmaps</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Learning Paths</h4>
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Full Stack Development</li>
            <li>Mobile Development</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://github.com/Roshansuthar1105" target="_blank" rel="noopener noreferrer" style={{"--hv": "#181717"}}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/roshansuthar/" target="_blank" rel="noopener noreferrer"style={{"--hv": "#0077b5"}}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/roshansuthar1105" target="_blank" rel="noopener noreferrer"style={{"--hv": "#1da1f2"}}>
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"style={{"--hv": "#ff0000"}}>
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/roshansuthar1105/" target="_blank" rel="noopener noreferrer"style={{"--hv": "#c32aa3"}}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Codify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
