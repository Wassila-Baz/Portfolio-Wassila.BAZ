import React from 'react';
import Card from './Cards.jsx';
import "../styles/Projects.scss"

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Riding Cities',
      imageSrc: "Riding-cities.png",
      githubLink: 'https://github.com/Wassila-Baz/RidingCities',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink: 'https://wassila-baz.github.io/RidingCities/'
    },
    {
      id: 2,
      title: 'Booki',
      imageSrc: "Booki.png",
      githubLink: 'https://github.com/Wassila-Baz/Booki',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/Booki/'
    },
    {
      id: 3,
      title: 'Ohmyfood',
      imageSrc: "ohmyfood-Mockup.png",
      githubLink: 'https://github.com/Wassila-Baz/ohmyfood-4',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/ohmyfood-4/'
    },
    {
      id: 4,
      title: 'Print-it',
      imageSrc: "Print-it.png",
      githubLink: 'https://github.com/Wassila-Baz/Print-it-1',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/Print-it-1/'
    },
    {
      id: 5,
      title: 'Portfolio Sophie Bluel',
      imageSrc: "Sophie-Bluel.png",
      githubLink: 'https://github.com/Wassila-Baz/Sophie-Bluel-Portfolio',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/Sophie-Bluel-Portfolio/'
    },
    {
      id: 6,
      title: 'Kasa',
      imageSrc: "kasa.png",
      githubLink: 'https://github.com/Wassila-Baz/Kasa_7',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/Kasa_7/'
    },
  ];

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
            />
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
