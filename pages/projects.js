import React from 'react';

const ProjectItem = ({ project }) => (
  <li>
    <h3>{project.name}</h3>
    <img src={project.screenshotUrl} alt={project.name} />
    <p>{project.description}</p>
    <a href={project.demoUrl}>View Demo</a>
  </li>
);

const ProjectShowcase = ({ projects }) => (
  <ul>
    {projects.map((project) => (
      <ProjectItem key={project.id} project={project} />
    ))}
  </ul>
);

export default ProjectShowcase;