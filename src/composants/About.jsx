import React from 'react';
import '../styles/About.scss';
import { Player } from '@lottiefiles/react-lottie-player';

function About() {
  return (
    <div id="apropos" className="about-container">
      <div className="lottie-container">
        <Player
          autoplay
          loop
          src="https://lottie.host/c8beecb2-505d-4e03-947f-e415106cf397/E39TvgLGRn.json"
          style={{ height: '300px', width: '300px' }}
        >
        </Player>
      </div>
      <div className="about-content">
        <h2>À propos de moi</h2>
        <p className="about-paragraph">
          Je suis Wassila Baz, passionnée de création. J'ai choisi de m'aventurer dans le développement web pour réaliser un virage complet dans ma carrière, moi qui étais une artisane créative. Grâce à une formation approfondie, j'ai exploré l'univers du web, à la fois complexe et captivant.

          À travers mon portfolio, je vous invite à découvrir mon parcours, mes compétences et les projets sur lesquels j'ai travaillé. Plongez dans mon univers où la passion pour la création rencontre l'expertise du développement web. Bienvenue dans mon monde numérique !
        </p>
      </div>
    </div>
  );
}

export default About;
