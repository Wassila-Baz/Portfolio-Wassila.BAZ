import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import image from "../assets/images/PORTFOLIO.png"; // Assurez-vous que le chemin d'importation est correct

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={image} alt="Portfolio Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/skills">Mes compétences</Link>
        <Link to="/projects">Mes projets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
