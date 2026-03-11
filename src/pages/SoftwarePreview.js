import React from "react";
import "../styles/SoftwarePreview.css";
import { FaShieldAlt, FaCode, FaServer, FaMobileAlt, FaCloud } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function SoftwarePreview() {

    const services = [

        {
            title: "Web Development",
            tech: "React • Node • MongoDB",
            desc: "Modern scalable web platforms with secure architecture.",
            icon: <FaCode />
        },

        {
            title: "Mobile Apps",
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
            title: "Cyber Security",
            tech: "Network • Encryption • Protection",
            desc: "Protect business systems with modern cybersecurity strategies.",
            icon: <FaShieldAlt />
        }

    ];

    return (

        <section id="software-services" className="software-preview">

            <div className="software-container">

                <div className="software-header">

                    <h2>Custom Software Development</h2>

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

export default SoftwarePreview;