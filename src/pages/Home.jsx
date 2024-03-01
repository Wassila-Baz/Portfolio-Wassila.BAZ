import React from 'react';
import About from '../composants/About';
import Skills from '../composants/Skills';
import Projects from '../composants/Projects';

function Home() {
  return (
    <div>
    <div></div>
      <About id="apropos" />
      <Projects id="skills" />
      <Skills id="projects" />
    </div>
  );
}


export default Home;
