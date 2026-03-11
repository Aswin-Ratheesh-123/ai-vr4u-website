import "../styles/FounderInfo.css";
import founder from "../assets/founderInfo.jpg"; // place the image in src/assets

function FounderInfo() {
  return (
    <section className="founder-page">

      <div className="founder-container">

        {/* Header */}
        <div className="founder-header">
          <h1>Meet Our Founder</h1>
          <p>Leadership driving innovation in cybersecurity and digital technology.</p>
        </div>

        {/* Profile Section */}
        <div className="founder-profile">

          <div className="founder-image">
            <img src={founder} alt="Amritha Dhurgha Lakshmi" />
          </div>

          <div className="founder-details">

            <h2>Amritha Dhurgha Lakshmi</h2>
            <h4>Founder & IT Visionary</h4>

            <p>
              Amritha Dhurgha Lakshmi, the founder of <strong>AI-VR4U Solutions</strong>,
              is an experienced IT professional with a diverse international
              background. Her career spans major global hubs, including
              <strong> two years in Dubai</strong> and <strong>three years in Sweden</strong>,
              and she currently leads operations from <strong>Budapest, Hungary</strong>.
            </p>

            <p>
              She holds an <strong>MBA in Information Systems</strong>, positioning
              her at the intersection of strategic business leadership and
              advanced technology. Her technical expertise is validated by
              prestigious <strong>Google Professional Certifications</strong>,
              achieving a remarkable <strong>94.02% grade in Linux and SQL</strong>,
              alongside specialized training in cybersecurity.
            </p>

          </div>

        </div>

        {/* Qualifications Section */}
        <div className="founder-qualifications">

          <h3>Key Qualifications & Global Expertise</h3>

          <div className="qualifications-grid">

            <div className="qualification-card">
              <h4>MBA in Information Systems</h4>
              <p>Expert in aligning IT infrastructure with long-term business growth.</p>
            </div>

            <div className="qualification-card">
              <h4>Google Certified Specialist</h4>
              <p>Advanced expertise in Cybersecurity Foundations, Linux, and SQL.</p>
            </div>

            <div className="qualification-card">
              <h4>Global Professional Experience</h4>
              <p>Over 5 years of international experience across Dubai, Sweden, and Hungary.</p>
            </div>

            <div className="qualification-card">
              <h4>Visionary Leadership</h4>
              <p>Committed to delivering secure, scalable, and innovative digital solutions worldwide.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FounderInfo;