import React from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Todolist from './Components/Todolist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import './Components/App.css';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Todolist" element={<Todolist />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
