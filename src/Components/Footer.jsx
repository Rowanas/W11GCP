import React, {useState} from "react";
import "../NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import AboutPage from "./AboutPage";
import OpeningTimes from "./Opening_Times";

const FooterBar = () => {
   
        return ( 
            <Router>
                <nav className="footerBar">
                    <ul>
                        <li className="footer__items"><a href="./AboutPage.html" className="footer__link">About</a></li>
                        <li className="footer__items"><Link to="/OpeningTimes.jsx" className="footer__link">OpeningTimes</Link></li>
                        </ul>
                
                    
            </nav>
            <Routes>
                <Route path="/AboutPage.jsx" element={<AboutPage/>}/>
                <Route path="/OpeningTimes.jsx" element={<OpeningTimes/>}/>
                </Routes>
        </Router>
     );
}
 

export default FooterBar;