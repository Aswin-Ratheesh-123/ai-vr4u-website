import React from "react";
import "../styles/SoftwarePreview.css";

import {
    FaShieldAlt,
    FaUserLock,
    FaBug,
    FaNetworkWired,
    FaDatabase
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function CyberSecurityPreview() {

    const services = [

        {
            title: "Vulnerability Assessment",
            tech: "Security Testing • Risk Analysis",
            desc: "Identify vulnerabilities in your systems before attackers can exploit them.",
            icon: <FaBug />
        },

        {
            title: "Network Security",
            tech: "Firewalls • Monitoring • Encryption",
            desc: "Secure internal networks and protect sensitive communications.",
            icon: <FaNetworkWired />
        },

        {
            title: "Data Protection",
            tech: "Encryption • Backup • Compliance",
            desc: "Protect sensitive data and ensure regulatory compliance.",
            icon: <FaDatabase />
        },

        {
            title: "Access Control",
            tech: "Authentication • Identity Management",
            desc: "Implement secure authentication and access management systems.",
            icon: <FaUserLock />
        },

        {
            title: "Security Consulting",
            tech: "Strategy • Risk Management",
            desc: "Develop cybersecurity strategies tailored to your organization.",
            icon: <FaShieldAlt />
        }

    ];

    return (

        <section className="software-preview">

            <div className="software-container">

                <div className="software-header">

                    <h2>Cyber Security Consulting</h2>

                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1100: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 }
                    }}
                >

                    {services.map((service, index) => (

                        <SwiperSlide key={index}>

                            <div className="software-card">

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

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

            <div className="view-button">

                <button className="card-btnn">
                    View More Services
                </button>

            </div>

        </section>

    );

}

export default CyberSecurityPreview;