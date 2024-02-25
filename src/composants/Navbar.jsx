import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import "../styles/Navbar.scss";
import image from "../assets/images/PORTFOLIO.png"; 

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={image} alt="Portfolio Logo" />
      </div>
      <div className="nav-links">
        {/* Utilisez le composant Link avec l'attribut "to" pour la navigation interne */}
        <Link to="/#apropos">À propos</Link>
        <Link to="/#skills">Mes compétences</Link>
        <Link to="/#projects">Mes projets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
