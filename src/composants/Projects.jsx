import React, { useState } from 'react';
import ProjectDetailModal from './ProjectDetailModal';
import Card from './Cards.jsx';
import "../styles/Projects.scss";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectsData = [
    {
      id: 1,
      title: 'Riding Cities',
      imageSrc: "Riding-cities.png",
      githubLink: 'https://github.com/Wassila-Baz/RidingCities',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink: 'https://wassila-baz.github.io/RidingCities/',
      skills:"HTML5, CSS3"
    },
    {
      id: 2,
      title: 'Booki',
      imageSrc: "Booki.png",
      githubLink: 'https://github.com/Wassila-Baz/Booki',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/Booki/',
      skills:"HTML5, CSS3, Flexbox, Responsive Web disign, Figma"
    },
    {
      id: 3,
      title: 'Ohmyfood',
      imageSrc: "ohmyfood-Mockup.png",
      githubLink: 'https://github.com/Wassila-Baz/ohmyfood-4',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/ohmyfood-4/',
      skills:"HTML, CSS, Flexbox, Responsive disign, Animations, Figma"
    },
    {
      id: 4,
      title: 'Print-it',
      imageSrc: "Print-it.png",
      githubLink: 'https://github.com/Wassila-Baz/Print-it-1',
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/Print-it-1/',
      skills:"HTML, CSS, Javascript"
    },
    {
      id: 5,
      title: 'Portfolio Sophie Bluel',
      imageSrc: "Sophie-Bluel.png",
      githubLink: 'https://github.com/Wassila-Baz/Sophie-Bluel-Portfolio',
      client: "Client : Agence ArchiWebos",
      presentation:" En tant que développeuse front-end, j'ai aidé une équipe à finaliser le nouveau site internet d'une architecte d'intérieur. J'étais chargée de développer plusieurs fonctionnalités clés pour le site.",
      projectDetails: "Objectifs : Mon rôle a inclus la création de la page de présentation des travaux de l'architecte, avec des options de filtrage par catégorie, le développement de la page de connexion sécurisée de l'administrateur en utilisant JWT (JSON Web Tokens) pour l'authentification, ainsi que la conception d'une modale permettant à l'architecte d'ajouter ou de supprimer des projets. J'ai utilisé JavaScript pour générer dynamiquement les éléments en communiquant avec une API, ce qui a permis de récupérer, ajouter et supprimer des travaux. Tout au long du projet, nous avons utilisé un tableau Kanban détaillé pour organiser notre travail de manière efficace.",
      liveLink:'https://wassila-baz.github.io/Sophie-Bluel-Portfolio/',
      skills:"HTML5, CSS3, Figma, Javascript, Node.js, Swagger"
    },
    {
      id: 6,
      title: 'Kasa',
      imageSrc: "kasa.png",
      githubLink: 'https://github.com/Wassila-Baz/Kasa_7',
      client:"Client: startup spécialisée dans la location d'appartements entre particuliers.",
      presentation:"Présentation : J'ai travaillé en tant que développeuse front-end sur le projet Kasa, pour une refonte totale du site, incluant une transition de ASP.NET à une stack Javascript moderne. Mon rôle était de concevoir une plateforme web en utilisant React pour le côté front-end, et Node.js pour le côté backend, ainsi que des maquettes fournies par le designer.",
      projectDetails: "Objectifs : Le principal défi était de rendre le projet compatible avec diverses tailles d'écran tout en respectant les spécifications de conception. J'ai utilisé flexbox pour créer une mise en page adaptable, garantissant ainsi une expérience utilisateur uniforme sur tous les appareils. J'ai travaillé en étroite collaboration avec les concepteurs pour intégrer harmonieusement les éléments visuels dans la mise en page, assurant ainsi une présentation esthétique et fonctionnelle sur les écrans larges de bureau, les tablettes et les smartphones.",
      liveLink:'https://wassila-baz.github.io/Kasa_7/',
      skills:"HTML, CSS, Flexbox, Responsive disign"
    },{
        id: 7,
        title: 'Nina Carducci',
        imageSrc: "SEO.png",
        githubLink: 'https://github.com/Wassila-Baz/NinaCarducci',
        client : "Nina Carducci, phototgraphe professionnelle",
        presentation : "Présentation : Nina Carducci est le site web d'une photographe professionnelle spécialisée dans les portraits et la photographie événementielle. Le site a pour but de présenter le portfolio de la photographe et de mettre en valeur ses réalisations.",
        projectDetails: "Objectifs : Le projet avait pour objectif d'optimiser la performance globale du site, en réduisant les temps de chargement et en renforçant son référencement sur les moteurs de recherche. Mon intervention a englobé diverses actions telles que l'optimisation des images, la refonte du code et de la structure du site, l'implémentation du référencement local avec Schema.org, ainsi que l'ajout de métadonnées pour les réseaux sociaux. De surcroît, j'ai procédé à une optimisation poussée du référencement SEO du site en intégrant le Rich Snippet pour améliorer sa visibilité sur les moteurs de recherche. J'ai également mené une analyse approfondie à l'aide de Wave afin d'assurer des performances optimales en termes d'accessibilité. Ces améliorations ont généré une expérience utilisateur plus fluide, une meilleure visibilité en ligne, et ont accru la capacité du site à attirer de nouveaux clients, notamment grâce à l'optimisation pour une meilleure accessibilité fournie par Wave.",
        liveLink:'https://wassila-baz.github.io/NinaCarducci/',
        skills:" SEO, Optimisation Web, Réferencement local, Rich Snippet, Wave, Lighthouse, Accesibilité"
      },
      {
        id: 8,
        title: 'Gestion de projet',
        imageSrc: "gestion.png",
        client : "Client : Qwenta, entreprise spécialisée dans les solutions numériques pour la restauration.",
        presentation : "Présentation : Au sein de l'agence Webgencia, j'ai pris en charge la préparation et la planification d'un projet de développement particulier : la création du Menu Maker pour l'entreprise Qwenta. Le Menu Maker est un outil novateur dédié aux restaurateurs, simplifiant la conception et la mise en page de leurs menus. ",
        projectDetails: "Client : Qwenta, entreprise spécialisée dans les solutions numériques pour la restauration.",
        skills:"Notion, Kanban, Outil de veille, Spécification technique, Planification de projet  "
      }
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