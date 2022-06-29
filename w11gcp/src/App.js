import React from "react";
import './App.css';
import HomePage from "./Components/HomePage";
import AboutPage from './Components/AboutPage';
import ClassificationPage from './Components/ClassificationPage';
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import GettingHerePage from './Components/GettingHerePage';
import FilmList from "./Components/FilmsList";
import BookingsPage from "./Components/BookingPage/BookingPage";
import Screens from "./Components/Screens";
import Partners from "./Components/Partners";
import Comment from "./Components/Comment";
import ContactPage from "./Components/ContactPage";
import films from "./Components/films.JSON"
import Card from './Components/Card';
import SearchBar from "./Components/SearchBar";
import { useState } from 'react';
import * as Fuse from './Components/fuse.js';

function App() {
  return (

    <div className="page-container">
      <div className="content-wrap">
      <Router>
        <SearchBar/>
        <NavigationBar/>
          <Routes>
            <Route path="/HomePage.jsx" element={<HomePage/>}/>
            <Route path="/BookingPage.jsx" element={<BookingsPage/>}/>
            <Route path="/Screens.jsx" element={<Screens/>}/>
            <Route path="/GettingHerePage.jsx" element={<GettingHerePage/>}/>
            <Route path="/Comment.jsx" element={<Comment/>}/>
            <Route path="/ClassificationPage.jsx" element={<ClassificationPage/>}/>
            <Route path="/AboutPage.jsx" element={<AboutPage/>}/>
            <Route path="/Partners.jsx" element={<Partners/>}/>
            <Route path="/ContactPage.jsx" element={<ContactPage/>}/>
          
          </Routes>
        <Footer/>
      </Router>
      </div>
    </div>
  );
}

export default App;
