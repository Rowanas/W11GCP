import React, {useState} from "react";
import "../NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import AboutPage from "./AboutPage";
import ClassificationPage from "./ClassificationPage";

const NavigationBar = () => {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler")

    const navToggle = () => {
        active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");

        toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");
        }
    return ( 
        <Router>
            <nav className="navBar">
                <a href="#" className="nav__brand">CINEMA</a>
                <ul className={active}>
                    <li className="nav__items"><a href="./NavigationBar.jsx" className="nav__link">Home</a></li>
                    <li className="nav__items"><Link to="/AboutPage.jsx" className="nav__link">About</Link></li>
                    <li className="nav__items"><Link to="/ClassificationPage.jsx" className="nav__link">Classification</Link></li>
                </ul>
                <div onClick = {navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <Routes>
                <Route path="/AboutPage.jsx" element={<AboutPage/>}/>
                <Route path="/ClassificationPage.jsx" element={<ClassificationPage/>}/>
            </Routes>
        </Router>
     );
}
 
export default NavigationBar;