import React, {useState} from "react";
import "../NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import ClassificationPage from "./ClassificationPage";
import GettingHerePage from "./GettingHerePage";
import FilmsList from "./FilmsList";
import Screens from "./Screens";
import BookingPage from "./BookingPage";

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
                <a href="#" className="nav__brand">Welcome to QA cinemas</a>
                <ul className={active}>
                    <li className="nav__items"><a href="./index.html" className="nav__link">Home</a></li>
                    <li className="nav__items"><Link to="/ClassificationPage.jsx" className="nav__link">Classification</Link></li>
                    <li className="nav__items"><Link to="/GettingHerePage.jsx" className="nav__link">Getting There</Link></li>
                    <li className="nav__items"><Link to="/Screens.jsx" className="nav__link">Screens</Link></li>
                    <li className="nav__items"><Link to="/BookingPage.jsx" className="nav__link">Ticket Booking</Link></li>
                    <li className="nav__items"><Link to="/FilmsList.jsx" className="nav__link">Listings</Link></li>

                </ul>
                <div onClick = {navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                    <div className="line4"></div>
                    <div className="line5"></div>
                    <div className="line6"></div>
                </div>
            </nav>
            <Routes>
                <Route path="/ClassificationPage.jsx" element={<ClassificationPage/>}/>
                <Route path="/GettingHerePage.jsx" element={<GettingHerePage/>}/>
                <Route path="/Screens.jsx" element={<Screens/>}/>
                <Route path="/BookingPage.jsx" element={<BookingPage/>}/>
                <Route path="/FilmsList.jsx" element={<FilmsList/>}/>
            </Routes>
        </Router>
     );
}
 
export default NavigationBar;