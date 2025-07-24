import {
    FaLaptopCode,
    FaUsersCog,
    FaProjectDiagram,
    FaPlug,
    FaLightbulb
} from "react-icons/fa";

export default function Services() {
    return (
        <section className="services-section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <p className="section-intro">
                    From event technology to association management systems and IT strategy,
                    EasyTechConnect delivers solutions that simplify your technology stack
                    and amplify your impact.
                </p>
                <div className="services-grid">

                    <div className="service-card">
                        <FaLaptopCode size={48} color="#f26722" />
                        <h3>Event Technology Solutions</h3>
                        <p>
                            Platform evaluation, selection, and implementation for seamless
                            registration, attendee engagement, and reporting.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaUsersCog size={48} color="#027b8a" />
                        <h3>Association Technology & AMS</h3>
                        <p>
                            Expert support for AMS migrations, integrations, member portals,
                            and community management tools.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaPlug size={48} color="#133268" />
                        <h3>Integrations & Custom Solutions</h3>
                        <p>
                            API integrations, custom workflow automation, and data migration
                            to unify your technology ecosystem.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaLightbulb size={48} color="#f2a922" />
                        <h3>IT Strategy & Advisory</h3>
                        <p>
                            Technology audits, cost optimization, vendor selection, and
                            strategic IT planning for long-term success.
                        </p>
                    </div>

                    <div className="service-card">
                        <FaProjectDiagram size={48} color="#16a34a" />
                        <h3>Project Management</h3>
                        <p>
                            PMP-certified leadership for vendor negotiations, change
                            management, and on-time delivery of complex tech projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
