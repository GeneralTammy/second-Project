import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Components
import Header from './Components/header';
import Footer from './Components/footer';
import Api from './Components/api';
import Comment from './Components/comment';
import Posts from './Components/Posts'

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

// Styles and Icons
import './App.css';
import 'boxicons';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/Api' element={<Api/>} />
        <Route path='/Comment' element={<Comment/>} /> 
        <Route path='/Posts' element={<Posts/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
