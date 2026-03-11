import React from "react";
import "../styles/SoftwarePreview.css";

import {
    FaServer,
    FaCloud,
    FaTools,
    FaNetworkWired,
    FaDatabase
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function InfrastructurePreview() {

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
        }

    ];

    return (

        <section className="software-preview">

            <div className="software-container">

                <div className="software-header">

                    <h2>IT Infrastructure & Support</h2>

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

export default InfrastructurePreview;