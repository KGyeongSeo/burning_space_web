import React from 'react';

import PROJECT from '/src/resources/project.json';

import Carrosel from './Carrosel';
import ProjectCard from './ProjectCard';

export default function Main() {
  return (
    <div>
      <Carrosel />
      {PROJECT.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
