import "../styles/SoftwarePreview.css";
import { Link } from "react-router-dom";


import {
    FaCode,
    FaMobileAlt,
    FaServer,
    FaCloud,
    FaDatabase,
    FaLaptopCode,
    FaShieldAlt,
    FaCogs
} from "react-icons/fa";

function SoftwareServices() {

    const services = [

        {
            title: "Web Development",
            tech: "React • Node • MongoDB",
            desc: "Modern scalable web platforms with secure architecture.",
            icon: <FaCode />
        },

        {
            title: "Mobile App Development",
            tech: "Flutter • React Native",
            desc: "High performance cross-platform mobile applications.",
            icon: <FaMobileAlt />
        },

        {
            title: "Enterprise Software",
            tech: "Java • Spring Boot • .NET",
            desc: "Secure enterprise business systems and automation.",
            icon: <FaServer />
        },

        {
            title: "Cloud Infrastructure",
            tech: "AWS • Docker • Kubernetes",
            desc: "Scalable cloud infrastructure and deployment systems.",
            icon: <FaCloud />
        },

        {
            title: "Database Systems",
            tech: "SQL • PostgreSQL • MongoDB",
            desc: "Reliable and optimized database architecture for applications.",
            icon: <FaDatabase />
        },

        {
            title: "Custom Software",
            tech: "Business Automation",
            desc: "Custom-built solutions designed for your business workflows.",
            icon: <FaLaptopCode />
        },

        {
            title: "Software Security",
            tech: "Encryption • Protection",
            desc: "Secure applications using modern cybersecurity practices.",
            icon: <FaShieldAlt />
        },

        {
            title: "System Integration",
            tech: "API • Microservices",
            desc: "Connect multiple platforms into one seamless system.",
            icon: <FaCogs />
        }

    ];

    return (

        <section className="software-preview">

            <div className="software-container">

                <div className="software-header">

                    <h2>Software Development Services</h2>

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

                            <Link to="/contact">
                                <button
                                    className="card-btn"
                                    onClick={() =>
                                        window.open("https://wa.me/919645310212", "_blank")
                                    }
                                >
                                    Enquire Now
                                </button>
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default SoftwareServices;