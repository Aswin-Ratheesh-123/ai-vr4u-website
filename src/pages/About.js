import "../styles/About.css";

function About() {
  return (

    <section className="about">

      <div className="about-container">

        {/* TOP SECTION */}

        <div className="about-top">

          <div className="about-left">

            <h1>About AI-VR4U Solutions</h1>

            <p className="about-intro">
              AI-VR4U Solutions is a technology consulting company helping
              organizations build secure, scalable, and innovative digital
              systems for the modern world.
            </p>

            <p>
              We specialize in cybersecurity consulting, custom software
              development, and IT infrastructure management. Our solutions
              combine strategic thinking with advanced technology to help
              businesses transform their digital operations.
            </p>

            <p>
              With international experience across multiple regions,
              we bring a global perspective to technology innovation
              while maintaining strong security and reliability standards.
            </p>

          </div>


          {/* RIGHT CARDS */}

          <div className="about-right">

            <div className="highlight-card">
              <h3>Cybersecurity</h3>
              <p>Protect digital assets with advanced security solutions.</p>
            </div>

            <div className="highlight-card">
              <h3>Software Development</h3>
              <p>Build scalable and reliable applications for modern businesses.</p>
            </div>

            <div className="highlight-card">
              <h3>IT Infrastructure</h3>
              <p>Design secure, efficient and scalable technology ecosystems.</p>
            </div>

          </div>

        </div>


        {/* STATS */}

        <div className="about-stats">

          <div className="stat">
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h2>Global</h2>
            <p>International Expertise</p>
          </div>

          <div className="stat">
            <h2>100%</h2>
            <p>Secure Solutions</p>
          </div>

        </div>


        {/* VISION / MISSION */}

        <div className="about-values">

          <div className="value-card">

            <h3>Our Vision</h3>

            <p>
              To become a globally trusted technology consulting partner
              delivering innovative and secure digital solutions.
            </p>

          </div>


          <div className="value-card">

            <h3>Our Mission</h3>

            <p>
              To empower organizations with intelligent technology,
              advanced cybersecurity, and scalable digital infrastructure.
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default About;