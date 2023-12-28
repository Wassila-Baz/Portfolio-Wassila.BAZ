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
    </footer>
  );
};

export default Footer;
