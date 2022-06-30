import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './App.css';
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer';
import HomePage from "./Components/HomePage";
import FilmsPage from "./Components/FilmsPage/FilmsPage";
import BookingsPage from "./Components/BookingPage/BookingPage";
import Screens from "./Components/Screens";
import GettingHerePage from './Components/GettingHerePage';
import Comment from "./Components/Comment";
import ClassificationPage from './Components/ClassificationPage';
import AboutPage from './Components/AboutPage';
import Partners from "./Components/Partners";
import ContactPage from "./Components/ContactPage";

function App() {
  return (

    <div className="page-container">
      <div className="content-wrap">
      <Router>
        <NavigationBar/>
          <Routes>
            <Route index path="/" element={<HomePage/>}/>
            <Route path="/BookingPage" element={<BookingsPage/>}/>
            <Route path="/FilmsPage" element={<FilmsPage/>}/>
            <Route path="/Screens" element={<Screens/>}/>
            <Route path="/GettingHerePage" element={<GettingHerePage/>}/>
            <Route path="/Comment" element={<Comment/>}/>
            <Route path="/ClassificationPage" element={<ClassificationPage/>}/>
            <Route path="/AboutPage" element={<AboutPage/>}/>
            <Route path="/Partners" element={<Partners/>}/>
            <Route path="/ContactPage" element={<ContactPage/>}/> */
          </Routes>
        <Footer/>
      </Router>
      </div>
    </div>
  );
}

export default App;
