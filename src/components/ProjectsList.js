import React from 'react';
import NewProjectItem from './ProjectItem';
import projectsData from './projectsData';
import './Project.css';

function NewProjectsList() {
  const sortedYears = Object.keys(projectsData).sort((a, b) => b - a);

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>PROJECTS</h2>
      </div>
      <div className="new-projects-section">
        {sortedYears.map(year => (
          <div key={year} className="year-section">
            <h2>{year}</h2>
            {projectsData[year].map((project, index) => (
              <NewProjectItem key={index} project={project} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewProjectsList;
