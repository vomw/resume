import React from 'react';
import { Project as ProjectType } from '../types';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
