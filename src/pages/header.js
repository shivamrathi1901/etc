import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="EasyTech Connect Logo" />
                <div className="logo-text">
                    <span className="company-name">EasyTech Connect</span>
                    <span className="tagline">Simplifying Tech, Amplifying Impact</span>
                </div>
            </div>

            {/* Hamburger Button */}
            <div
                className={`hamburger ${menuActive ? "is-active" : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Menu */}
            <nav className={menuActive ? "menu-active" : ""}>
                <Link to="/" onClick={() => setMenuActive(false)}>Home</Link>
                <Link to="/services" onClick={() => setMenuActive(false)}>Services</Link>
                <Link to="/about" onClick={() => setMenuActive(false)}>About</Link>
                <Link to="/contact" onClick={() => setMenuActive(false)}>Contact</Link>
            </nav>
        </header>
    );
};
