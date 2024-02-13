import React from 'react';
import "../styles/Cards.scss";

const Card = ({ title, imageSrc, githubLink, liveLink, onClick }) => {
  const handleCardClick = (event) => {
    if (!event.target.closest('a')) {
      event.preventDefault();
      if (onClick) {
        onClick();
      } else {
        window.open(liveLink, "_blank"); // Ouvre le lien dans un nouvel onglet
      }
    }
  };

  return (
    <div className={`project`} onClick={handleCardClick}>
      <div className="image-container">
        <img src={imageSrc} alt={title} />
        <div className="overlay">
          <div className="links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-link fa-lg"></i></a>
          </div>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
