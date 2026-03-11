import "../styles/Services.css";

function Services() {
  return (
    <div className="services-container">

      <h1>Our Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <h2>Cyber Security Consulting</h2>
          <p>
            We help businesses protect their digital assets through advanced
            cybersecurity strategies, vulnerability assessments, and security
            audits that ensure compliance with global standards.
          </p>

          <ul>
            <li>Vulnerability Assessments</li>
            <li>Security Audits</li>
            <li>Network Protection</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Custom Software Development</h2>
          <p>
            Our team builds scalable, secure, and high-performance software
            solutions tailored to your business requirements.
          </p>

          <ul>
            <li>Web & Mobile Applications</li>
            <li>Database Management (SQL)</li>
            <li>System Integration</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>IT Infrastructure & Support</h2>
          <p>
            We design, implement, and maintain robust IT infrastructures using
            modern technologies and Linux-based systems.
          </p>

          <ul>
            <li>Linux System Administration</li>
            <li>Cloud Solutions</li>
            <li>Technical Consultation</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Services;