import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section footer-about">

          <h3>AI-VR4U SOLUTIONS</h3>

          <p>
            AI-VR4U Solutions delivers cutting-edge cybersecurity,
            custom software development, and scalable IT infrastructure
            services to help businesses innovate, secure their digital
            assets, and accelerate growth in a rapidly evolving
            technology landscape.
          </p>

        

        </div>

        {/* Quick Links */}
        <div className="footer-section">

          <h4>Quick Links</h4>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/software">Software</Link></li>

            <li><Link to="/cybersecurity">Cybersecurity</Link></li>

            <li><Link to="/it-services">IT Services</Link></li>

            <li><Link to="/founder">Founder</Link></li>

          </ul>

        </div>

        {/* Expertise */}
        <div className="footer-section">

          <h4>Core Expertise</h4>

          <ul>

            <li>Cybersecurity Consulting</li>

            <li>Custom Software Development</li>

            <li>Linux Infrastructure & DevOps</li>

            <li>Cloud & Enterprise Solutions</li>

            <li>IT Infrastructure Management</li>

          </ul>

        </div>

        {/* Contact */}
        <div className="footer-section">

          <h4>Contact</h4>

          <ul className="footer-contact">

            <li>Email: aivr4usolutions@gmail.com</li>

          

            <li>AI- VR4U SOLUTIONS</li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 AI-VR4U Solutions. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;