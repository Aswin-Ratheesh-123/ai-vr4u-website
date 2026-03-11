import "../styles/SoftwarePreview.css";

import {
    FaShieldAlt,
    FaBug,
    FaNetworkWired,
    FaUserLock,
    FaDatabase,
    FaUserSecret,
    FaLock,
    FaSearch,
    FaLaptopCode,
    FaServer,
    FaExclamationTriangle,
    FaFingerprint,
    FaCloud
} from "react-icons/fa";

function CyberSecurityServices() {

    const services = [

        {
            title: "Vulnerability Assessment",
            tech: "Security Testing • Risk Analysis",
            desc: "Identify vulnerabilities in your systems before attackers exploit them.",
            icon: <FaBug />
        },

        {
            title: "Penetration Testing",
            tech: "Ethical Hacking • Security Audit",
            desc: "Simulate cyber attacks to test the strength of your security infrastructure.",
            icon: <FaUserSecret />
        },

        {
            title: "Network Security",
            tech: "Firewalls • Monitoring • Encryption",
            desc: "Protect internal networks from unauthorized access and threats.",
            icon: <FaNetworkWired />
        },

        {
            title: "Identity & Access Management",
            tech: "Authentication • Authorization",
            desc: "Ensure secure access control for users and systems.",
            icon: <FaUserLock />
        },

        {
            title: "Data Protection",
            tech: "Encryption • Backup • Compliance",
            desc: "Protect sensitive data and ensure regulatory compliance.",
            icon: <FaDatabase />
        },

        {
            title: "Endpoint Security",
            tech: "Device Protection • Malware Defense",
            desc: "Secure laptops, servers and mobile devices against cyber threats.",
            icon: <FaLaptopCode />
        },

        {
            title: "Cloud Security",
            tech: "AWS • Azure • Cloud Protection",
            desc: "Protect cloud-based infrastructure and applications.",
            icon: <FaCloud />
        },

        {
            title: "Threat Monitoring",
            tech: "SOC • Real-time Monitoring",
            desc: "Detect suspicious activity and respond to threats quickly.",
            icon: <FaSearch />
        },

        {
            title: "Security Compliance",
            tech: "ISO • GDPR • Security Policies",
            desc: "Ensure your business meets international security standards.",
            icon: <FaFingerprint />
        },

        {
            title: "Incident Response",
            tech: "Threat Recovery • Security Response",
            desc: "Rapid response to cyber incidents to minimize damage.",
            icon: <FaExclamationTriangle />
        },

        {
            title: "Application Security",
            tech: "Secure Coding • Code Review",
            desc: "Identify vulnerabilities in software applications.",
            icon: <FaServer />
        },

        {
            title: "Cybersecurity Consulting",
            tech: "Risk Management • Strategy",
            desc: "Develop cybersecurity strategies tailored to your organization.",
            icon: <FaShieldAlt />
        }

    ];

    return (

        <section className="software-preview">

            <div className="software-container">

                <div className="software-header">

                    <h2>Cyber Security Services</h2>

                </div>

                <div className="services-grid">

                    {services.map((service, index) => (

                        <div className="software-card" key={index}>

                            <div className="card-top">

                                <div className="service-icon">
                                    {service.icon}
                                </div>

                                <div className="card-number">
                                    0{index + 1}
                                </div>

                            </div>

                            <h3>{service.title}</h3>

                            <p className="tech">{service.tech}</p>

                            <p className="desc">{service.desc}</p>

                            <button
                                className="card-btn"
                                onClick={() =>
                                    window.open("https://wa.me/919645310212", "_blank")
                                }
                            >
                                Enquire Now
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default CyberSecurityServices;