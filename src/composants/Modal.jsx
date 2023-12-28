// Modal.jsx
import React from 'react';

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button onClick={onClose}>Fermer</button>
        </div>
        <div className="modal-body">
          <img src={project.imageSrc} alt={project.title} />
          <p>Détails du projet...</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
