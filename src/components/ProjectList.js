import React from 'react';
import Project from './Project';
import projects from './projectsData';
import './Project.css'; 

function ProjectsList() {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectsList;
