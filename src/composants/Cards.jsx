import React, { useState } from 'react';

const Card = ({ title, imageSrc, githubLink, liveLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`project ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={title} />
      </a>
      <h3>{title}</h3>
      <div className={`icon-content-${isHovered ? 'show' : 'hide'}`}>
        <i className="fab fa-github fa-2x">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </i>

        <i className="fas fa-link fa-2x">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Site
          </a>
        </i>
      </div>
    </div>
  );
};

export default Card;
