// src/components/Footer.js
import React from 'react';
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons-footer">
        <i>
          <a href="https://github.com/Wassila-Baz" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
        </i>
        <i>
          <a href="https://www.instagram.com/royaume.d.roses/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
        </i>
        <i>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </i>
        <i>
        <a target="_blank" href="mailto:wassila.baz@gmail.com" rel="noopener noreferrer">
        <i className="fas fa-envelope fa-2x"></i>
      </a>
        </i>
      </div>
      <p> &copy; 2024 Wassila BAZ. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
