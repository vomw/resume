import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project as ProjectType } from '../types';
import CanvasText from './CanvasText';

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { t } = useTranslation();
  return (
    <section className="my-5">
      <div className="text-center mb-4">
        <CanvasText text={t('projectsTitle')} fontSize={32} />
      </div>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title">
                  <CanvasText text={project.name} fontSize={20} />
                </div>
                <div className="card-text">
                  <CanvasText text={project.description} fontSize={16} />
                </div>
                <div className="card-text" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <strong>
                    <CanvasText text={t('technologiesTitle') + ':'} fontSize={16} />
                  </strong>
                  <CanvasText text={project.technologies.join(', ')} fontSize={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
