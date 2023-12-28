import React, { useState } from 'react';
import Modal from './Modal.jsx';

const Card = ({ title, imageSrc, githubLink }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    document.body.classList.toggle('modal-open');
  };

  return (
    <div className="project" onClick={toggleModal}>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div className="icon-content-show">
        <i className="fa-brands fa-github fa-2x">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </i>
      </div>
      {modalOpen && <Modal project={{ title, imageSrc }} onClose={toggleModal} />}
    </div>
  );
};

export default Card;
