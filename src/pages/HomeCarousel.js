import "../styles/HomeCarousel.css";
import {
    FaCode,
    FaMobileAlt,
    FaCloud,
    FaShieldAlt,
    FaServer,
    FaDatabase,
    FaNetworkWired,
    FaTools
} from "react-icons/fa";

function HomeCarousel() {

    const services = [
        { icon: <FaCode />, name: "Web Development" },
        { icon: <FaMobileAlt />, name: "Mobile Apps" },
        { icon: <FaCloud />, name: "Cloud Solutions" },
        { icon: <FaShieldAlt />, name: "Cyber Security" },
        { icon: <FaServer />, name: "Server Management" },
        { icon: <FaDatabase />, name: "Data Management" },
        { icon: <FaNetworkWired />, name: "Network Infrastructure" },
        { icon: <FaTools />, name: "System Administration" }
    ];

    return (

        <section className="home-carousel">
            <div className="carousel-header">
                <h2>Services We Deliver</h2>
                </div>
                {/* LEFT MOVING ROW */}

                <div className="carousel-row left">

                    <div className="carousel-track">

                        {services.concat(services).map((service, index) => (
                            <div className="carousel-item" key={index}>

                                <div className="carousel-icon">
                                    {service.icon}
                                </div>

                                <span>{service.name}</span>

                            </div>
                        ))}

                    </div>

                </div>

                {/* RIGHT MOVING ROW */}

                <div className="carousel-row right">

                    <div className="carousel-track">

                        {services.concat(services).map((service, index) => (
                            <div className="carousel-item" key={index}>

                                <div className="carousel-icon">
                                    {service.icon}
                                </div>

                                <span>{service.name}</span>

                            </div>
                        ))}

                    </div>

                </div>

        </section>

    );

}

export default HomeCarousel;