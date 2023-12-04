import React from 'react';
import './Project.css';

function NewProjectItem({ project }) {
  return (
    <div className="new-project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="skills-list">
        {project.skills.map((skill, index) => (
          <li key={index} className="skill">{skill}</li>
        ))}
      </ul>
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" >GitHub Repo</a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" >Live Site</a>
      )}
    </div>
  );
}

export default NewProjectItem;
