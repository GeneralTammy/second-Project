import React from 'react';
import Header from './Components/header';
import './App.css';
import Footer from './Components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import "./App.js";
import 'boxicons';




export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
};
