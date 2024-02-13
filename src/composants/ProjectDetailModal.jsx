import React from 'react';
import "../styles/ProjectDetailModal.scss";

const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay"> 
      <div className="modal">
        <div className="modal-content">
          <h2>{project.title}</h2>
          <p>{project.client}</p>
          <p>{project.presentation}</p>
          <p>{project.projectDetails}</p>
          <div className="skills-modal">
            {project.skills.split(',').map((skill, index) => (
              <div key={index} className="skills">
                {skill.trim()}
              </div>
            ))}
          </div>
          <button className="close-button" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
