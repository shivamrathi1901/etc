import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
export default function About() {
    return (
        <div>
            <main class="container">
                <h2>Welcome to EasyTechConnect</h2>
                <p>Where we believe that technology for event and association management shouldn't be a headache. Founded on over two decade of hands-on experience in the industry,
                    EasyTechConnect was born out of a passion for simplifying the complex world of event and association technologies for the people who need it most – you.</p>
                <p>As VP of Technology for an event and association management company for the past 15+ years,
                    I've been on the front lines of evaluating, implementing, and supporting a vast array of technology solutions.
                    From navigating intricate event platforms like Cvent, Stova, Bizzabo, Swapcard, etc. to streamlining association operations
                    with AMS systems like Aptify, YourMembership, GrowthZone, MemberClicks, etc.,
                    I've seen firsthand the challenges and frustrations that technology can sometimes bring.
                    That's why EasyTechConnect is dedicated to providing clear, effective, and easy-to-understand solutions.</p>

                <p>My experience goes beyond just knowing the systems. It's about understanding your needs – the event planner striving for seamless registration and attendee engagement,
                    the association staff aiming to connect with members effectively, and the leadership looking for technology that drives growth without breaking the bank.
                    I specialize in bridging the gaps between different systems through smart integrations, finding innovative solutions to unique challenges, and ensuring that technology enhances, rather than hinders, your goals.</p>

                <p>With a PMP certification held for the last decade, I bring a structured and organized approach to every project, ensuring clear communication, on-time delivery,
                    and solutions that are built to last. Whether you're looking to implement a new event platform, migrate your association's AMS,
                    optimize your internal IT infrastructure, or simply need expert guidance to make the right technology choices, EasyTechConnect is here to make the process easy and the results impactful.</p>

                <p>Let us take the complexity out of your technology, so you can focus on creating exceptional events and fostering thriving associations.
                    Connect with EasyTechConnect today and experience the difference that clarity and expertise can make.</p>
                <Link to="/contact" className="primary cta-btn">
                    Get Started! <FaArrowRight />
                </Link>
            </main>
        </div>
    );
}