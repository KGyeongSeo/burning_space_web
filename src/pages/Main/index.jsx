import React from 'react';

import PROJECT from '/src/resources/project.json';

import ProjectCard from './ProjectCard';

export default function Main() {
  return (
    <div>
      {PROJECT.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
