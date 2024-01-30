// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './composants/Navbar.jsx';
import Footer from './composants/Footer.jsx';
import Projects from "./composants/Projects.jsx";
import About from "./composants/About.jsx";  // Assurez-vous que le nom du fichier est correct
import Skills from './composants/Skills.jsx' ;
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          </Routes>
          <Skills />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
