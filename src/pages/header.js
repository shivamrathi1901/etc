import logo from '../images/logo.png';
import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="ETC Logo" style={{height:"60px"}}/>
                <span className="tagline">
                    EasyTechConnect: Simplifying Tech, Amplifying Impact.
                </span>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};
