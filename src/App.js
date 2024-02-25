import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './composants/Navbar.jsx';
import Footer from './composants/Footer.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
