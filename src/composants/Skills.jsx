import React from 'react';
import "../styles/Skills.scss";

const SkillsComponent = () => {
  return (
    <div  id="skills" className="skills-container">
      <h2>Compétences</h2>
      <div className="icon-container">
        <img src='/figma.png' alt="Figma" className="icon" />
        <img src='/git.png' alt="Git" className="icon icone-color" />
        <img src='/github.png' alt="GitHub" className="icon icone-color" />
        <img src='/reactjs.png' alt="ReactJS" className="icon " />
        <img src='/sass.png' alt="Sass" className="icon" />
        <img src='/javascript.png' alt="JavaScript" className="icon" />
        <img src='/redux.png' alt="Redux" className="icon" />
        <img src='/R-Seo.png' alt="SEO" className="icon" />
      </div>
    </div>
  );
};

export default SkillsComponent;
