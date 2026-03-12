import { useState, useEffect } from "react";
import "../styles/Home.css";

import SoftwarePreview from "./SoftwarePreview";
import CyberSecurityPreview from "./CyberSecurityPreview";
import InfrastructurePreview from "./InfrastructurePreview";
import ConsultationProcess from "./ConsultationProcess";
import HomeCarousel from "./HomeCarousel";

import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaUserSecret
} from "react-icons/fa";

function Home() {

  const words = ["Softwares", "Cyber Security", "IT Services"];
  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);

  }, [words.length]);

  return (

    <main>

      {/* HERO */}

      <section className="hero">

        <div className="hero-container">

          {/* TEXT CONTENT */}

          <div className="hero-content">

            <h1 className="hero-title">

              <span className="hero-light">We</span>

              <span className="hero-outline">provide</span>

              <span key={index} className="hero-animated">
                {words[index]}
              </span>

            </h1>

            <p className="hero-description">
              Delivering innovative software development, cybersecurity,
              and IT infrastructure solutions that help businesses
              scale securely in a digital-first world.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => {
                  document
                    .getElementById("consultation-process")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Consultation →
              </button>

              <button
                className="secondary-btn"
                onClick={() => {
                  document
                    .getElementById("software-services")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
              </button>

            </div>

          </div>


          {/* CYBER SECURITY ICONS */}

          <div className="hero-visual">

            <div className="tech-card"><FaShieldAlt /></div>
            <div className="tech-card"><FaLock /></div>
            <div className="tech-card"><FaBug /></div>
            <div className="tech-card"><FaUserSecret /></div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section className="services">

        <div className="services-header">

          <h2>Our Services</h2>

          <p className="services-sub">
            Professional IT consulting and technology solutions
            designed for security, scalability, and performance.
          </p>

        </div>

        <SoftwarePreview />
        <CyberSecurityPreview />
        <InfrastructurePreview />
        <ConsultationProcess />
        <HomeCarousel />

      </section>

    </main>

  );

}

export default Home;