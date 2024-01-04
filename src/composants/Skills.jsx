import React from 'react';
import "../styles/Skills.scss";

const SkillsComponent = () => {
  return (
    <div className="skills-container">
      <h2>Compétences</h2>
      <div className="icon-container">
        <img src='/figma.png' alt="Figma" className="icon" />
        <img src='/git.png' alt="Git" className="icon" />
        <img src='/github.png' alt="GitHub" className="icon icone-color" />
        <img src='/reactjs.png' alt="ReactJS" className="icon icone-color" />
        <img src='/sass.png' alt="Sass" className="icon" />
        <img src='/javascript.png' alt="JavaScript" className="icon" />
      </div>
    </div>
  );
};

export default SkillsComponent;
