import React from 'react';
import './Project.css'; 

function Project({ project }) {
  return (
    <div className="project">
      <img src={project.imageUrl} alt={`Project titled ${project.title}`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-skills">
        <strong>Skills:</strong> {project.skills.join(", ")}
      </div>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;
