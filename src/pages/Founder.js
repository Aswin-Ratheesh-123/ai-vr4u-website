import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>AI-VR4U SOLUTIONS</h3>
          <p>
            Delivering cybersecurity, software development,
            and strategic IT consulting for businesses worldwide.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Founder</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Expertise</h4>

          <ul>
            <li>Cybersecurity</li>
            <li>Software Development</li>
            <li>Linux Infrastructure</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 AI-VR4U SOLUTIONS. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;