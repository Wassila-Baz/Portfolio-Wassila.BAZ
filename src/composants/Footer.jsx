// src/components/Footer.js
import React from 'react';
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons-footer">
        <i>
          <a href="mailto:wassila.baz@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
        </i>
        <i>
          <a href="https://www.instagram.com/royaume.d.roses/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
        </i>
        <i>
          <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </i>
        <i>
          <a href="https://twitter.com/?lang=fr" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter fa-2x"></i>
          </a>
        </i>
      </div>
      <p> &copy; 2024 Wassila BAZ. Tous droits réservés.</p>
      <ul class="menu-list">
        <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
        <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
      </ul>
  
    </footer>
  );
};

export default Footer;
