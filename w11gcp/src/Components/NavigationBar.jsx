import React, {useState} from "react";
import "../NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavigationBar = () => {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler")

    const navToggle = () => {
        active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");

        toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");
        }
    return (
            <nav className="navBar">
                <h2 className="nav__brand"><Link to="/" className="nav__brand">Cinema</Link></h2>
                <ul className={active}>
                    <li className="nav__items"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__items"><Link to="/FilmsPage" className="nav__link">Films</Link></li>
                    <li className="nav__items"><Link to="/BookingPage" className="nav__link">Bookings</Link></li>
                    <li className="nav__items"><Link to="/Screens" className="nav__link">Screens</Link></li>
                    <li className="nav__items"><Link to="/GettingHerePage" className="nav__link">Getting Here</Link></li>
                    <li className="nav__items"><Link to="/Comment" className="nav__link">Discussion Board</Link></li>
                    <li className="nav__items"><Link to="/ClassificationPage" className="nav__link">Classification</Link></li>
                </ul>
                <div onClick = {navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
     );
}
 
export default NavigationBar;