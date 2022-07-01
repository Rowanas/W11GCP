import "../Footer.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Cinema</h4>
                        <ul className="list-unstyled">
                            <li>01392 444 4444</li>
                            <li>Location Devon</li>
                            <li>122 Cinema Street</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Additional Links</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/AboutPage" className="nav__link">About</Link></li>
                            <li><Link to="/WhatsAround" className="nav__link">What's around</Link></li>
                            <li><Link to="/ContactPage" className="nav__link">Contact Page</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} ABDELBAQI CINEMA ALL RIGHTS RESERVED | Terms of service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;