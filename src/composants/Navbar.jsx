import React from "react";
import { Link } from "react-scroll"; // Importez Link depuis react-scroll pour le défilement en douceur
import "../styles/Navbar.scss";
import image from "../assets/images/PORTFOLIO.png"; 

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={image} alt="Portfolio Logo" />
      </div>
      <div className="nav-links">
        {/* Utilisez Link de react-scroll avec les identifiants des sections */}
        <Link to="apropos" smooth={true} duration={500}>À propos</Link>
        <Link to="skills" smooth={true} duration={500}>Mes compétences</Link>
        <Link to="projects" smooth={true} duration={500}>Mes projets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
