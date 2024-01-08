// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './composants/Navbar.jsx';
import Footer from './composants/Footer.jsx';
import Projects from "./composants/Projects.jsx";  // Assurez-vous que le nom du fichier est correct
import Skills from './composants/Skills.jsx' ;
import Contact from './composants/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Projects />  {/* Utilisez le composant Projects au lieu de Cards */}
        <Skills />
        <Contact />
        <Footer />
     
      </div>
    </Router>
  );
}

export default App;
