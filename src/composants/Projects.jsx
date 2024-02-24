import React, { useState } from 'react';
import Card from '../composants/Cards';
import ProjectDetailModal from './ProjectDetailModal';
import projectsData from '../projectsData.json'; // Import des données depuis le fichier JSON
import "../styles/Projects.scss";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="section-content">
      <h2> Mes Projets </h2>
      <div className="project-container">
        {projectsData.map((project) => (
          <div key={project.id} className="column">
            <Card
              title={project.title}
              imageSrc={project.imageSrc}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              onClick={() => openModal(project)}
            />
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
