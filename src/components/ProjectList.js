import React from 'react';
import Project from './Project';
import projects from './projectsData';
import './Project.css'; 

function ProjectsList() {
  return (
    <div>
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
    </div>
  );
}

export default ProjectsList;
