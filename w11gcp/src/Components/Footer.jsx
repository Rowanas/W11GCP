<<<<<<< HEAD
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
                            <li>0208 444 4444</li>
                            <li>Location Devon</li>
                            <li>122 Cinema Street</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Things</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/AboutPage.jsx" className="nav__link">About</Link></li>
                            <li><Link to="/WhatsAround.jsx" className="nav__link">Whats around us</Link></li>
                            <li><Link to="/ContactPage.jsx" className="nav__link">Contact Page</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>LAST BIT</h4>
                        <ul className="list-unstyled">
                            <li>THINGS</li>
                            <li>MORE THINGS</li>
                            <li>LAST THING</li>
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

=======
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
                        <h4>Things</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/AboutPage.jsx" className="nav__link">About</Link></li>
                            <li><Link to="/Partners.jsx" className="nav__link">Partners</Link></li>
                            <li><Link to="/ContactPage.jsx" className="nav__link">Contact Page</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>LAST BIT</h4>
                        <ul className="list-unstyled">
                            <li>THINGS</li>
                            <li>MORE THINGS</li>
                            <li>LAST THING</li>
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
 
>>>>>>> 4203de95d600b1362c6a84946b278cc69a80a918
export default Footer;