import React from "react";
import "../styles/InfrastructureServices.css";

import {
    FaServer,
    FaCloud,
    FaTools,
    FaNetworkWired,
    FaDatabase,
    FaShieldAlt,
    FaLaptopCode,
    FaHdd
} from "react-icons/fa";

function InfrastructureServices() {

    const services = [

        {
            title: "Server Management",
            tech: "Linux • Windows • Virtualization",
            desc: "Professional setup and maintenance of secure and high-performance servers.",
            icon: <FaServer />
        },

        {
            title: "Cloud Solutions",
            tech: "AWS • Azure • Cloud Migration",
            desc: "Deploy and manage applications with reliable and scalable cloud infrastructure.",
            icon: <FaCloud />
        },

        {
            title: "System Administration",
            tech: "Monitoring • Maintenance",
            desc: "Continuous monitoring and system optimization to ensure stability and uptime.",
            icon: <FaTools />
        },

        {
            title: "Network Infrastructure",
            tech: "LAN • VPN • Security",
            desc: "Design and maintain secure network environments for businesses.",
            icon: <FaNetworkWired />
        },

        {
            title: "Data Management",
            tech: "Backup • Recovery • Storage",
            desc: "Reliable data storage, backup systems, and disaster recovery solutions.",
            icon: <FaDatabase />
        },

        {
            title: "Endpoint Management",
            tech: "Device Security • Updates",
            desc: "Manage and secure company laptops, desktops, and servers.",
            icon: <FaLaptopCode />
        },

        {
            title: "Infrastructure Security",
            tech: "Monitoring • Protection",
            desc: "Secure IT infrastructure from cyber threats and vulnerabilities.",
            icon: <FaShieldAlt />
        },

        {
            title: "Storage Solutions",
            tech: "SAN • NAS • Data Storage",
            desc: "Scalable storage systems designed for enterprise-level performance.",
            icon: <FaHdd />
        }

    ];

    return (

        <section className="infrastructure-services">

            <div className="services-container">

                <div className="services-header">

                    <h1>IT Infrastructure & Support Services</h1>

                    <p>
                        Build reliable, scalable, and secure IT infrastructure
                        to support modern business operations.
                    </p>

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

export default InfrastructureServices;