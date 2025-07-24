import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../images/heroImage.png";

export default function Home() {
    return (
        <div className="home-page">
            {/* ===== Hero Section ===== */}
            <section className="hero">
                <div className="hero-content">
                    <h1 style={{ maxWidth: "700px", lineHeight: "1.2" }}>
                        Simplifying Technology <br /> for Events & Associations
                    </h1>
                    <p style={{ maxWidth: "600px", marginTop: "1rem" }}>
                        We make event and association technology work for you—
                        streamlined, integrated, and stress-free.
                    </p>
                    <div className="hero-cta" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
                        <Link to="/contact" className="primary cta-btn">
                            Schedule a Free Consultation <FaArrowRight />
                        </Link>
                        <Link to="/services" className="secondary-btn">
                            Explore Services
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Replace with actual hero image */}
                    <img
                        src={HeroImage}
                        alt="Event technology integration"
                    />
                </div>
            </section>


            {/* ===== About Preview Section ===== */}
            <section className="intro">
                <h2>Why EasyTechConnect?</h2>
                <p>
                    With over 20 years of hands-on experience, we simplify complex
                    technologies—helping event planners, association staff, and leadership
                    teams focus on what they do best: creating exceptional events and
                    fostering thriving associations.
                </p>
                <Link to="/about" className="secondary-btn">
                    Learn More
                </Link>
            </section>

            {/* ===== Services Overview ===== */}
            <section className="quick-services">
                <h2>Our Core Services</h2>
                <div className="quick-services-grid">
                    <div className="service-preview">
                        <h3>Event Technology Solutions</h3>
                        <p>
                            Platform evaluation, implementation, and attendee engagement
                            tools for seamless events.
                        </p>
                    </div>
                    <div className="service-preview">
                        <h3>Association Technology & AMS</h3>
                        <p>
                            AMS migrations, integrations, and member engagement solutions
                            that drive growth.
                        </p>
                    </div>
                    <div className="service-preview">
                        <h3>Integrations & Custom Solutions</h3>
                        <p>
                            API integrations, custom workflows, and automation to connect
                            your systems.
                        </p>
                    </div>
                    <div className="service-preview">
                        <h3>IT Strategy & Advisory</h3>
                        <p>
                            Expert technology audits, vendor selection, and cost-optimized
                            IT planning.
                        </p>
                    </div>
                    <div className="service-preview">
                        <h3>Project Management</h3>
                        <p>
                            PMP-certified delivery, vendor negotiations, and change
                            management support.
                        </p>
                    </div>
                </div>
                <Link to="/services" className="secondary-btn">
                    View All Services
                </Link>
            </section>

            {/* ===== Partners Section ===== */}
            {/* <section className="partners">
                <h2>Our Technology Partners</h2>
                <div className="partners-grid">
                    <img src="/images/partners/cvent.png" alt="Cvent" />
                    <img src="/images/partners/stova.png" alt="Stova" />
                    <img src="/images/partners/bizzabo.png" alt="Bizzabo" />
                    <img src="/images/partners/swapcard.png" alt="Swapcard" />
                    <img src="/images/partners/aptify.png" alt="Aptify" />
                    <img src="/images/partners/memberclicks.png" alt="MemberClicks" />
                </div>
            </section> */}

            {/* ===== Call to Action Footer ===== */}
            <section className="cta-footer" style={{ textAlign: "center", padding: "4rem 1rem" }}>
                <div className="cta-content" style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <h2 className="cta-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                        Ready to Simplify Your Technology?
                    </h2>
                    <p className="cta-subtitle" style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                        Let EasyTechConnect take the complexity out of your event and association
                        technology. Connect with us today and see the difference clarity and
                        expertise can make.
                    </p>
                    <Link to="/contact" className="primary cta-btn">
                        Contact Us <FaArrowRight />
                    </Link>
                </div>
            </section>

        </div>
    );
}
