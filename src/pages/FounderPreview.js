import "../styles/FounderPreview.css";
import { Link } from "react-router-dom";

function FounderPreview() {

    return (

        <section className="founder-preview">

            <div className="founder-container">

                {/* Image */}
                <div className="founder-image">
                    <img
                        src="/founder.jpg"
                        alt="Founder"
                    />
                </div>

                {/* Content */}
                <div className="founder-content">

                    <h2>Meet Our Founder</h2>

                    <h3>Amritha Dhurghalakshmi</h3>

                    <p>
                        Founder of AI-VR4U Solutions with international experience
                        across the Middle East and Europe. With an MBA in Information
                        Systems and certifications in cybersecurity and data management,
                        she helps organizations secure and scale their digital
                        infrastructure.
                    </p>

                    <Link to="/founder">
                        <button className="founder-btn">
                            Read Full Story →
                        </button>
                    </Link>

                </div>

            </div>

        </section>

    );
}

export default FounderPreview;