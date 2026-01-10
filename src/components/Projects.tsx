import React from 'react';
import { useTranslation } from 'react-i18next';
import { useResumeData } from '../contexts/ResumeDataContext';
import ResumeSection from './ResumeSection';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { resume } = useResumeData();

  if (!resume?.projects) {
    return null;
  }

  return (
    <ResumeSection title={resume.projectsTitle}>
      <div className="row">
        {resume.projects.map((project, index) => (
          <div key={index} className="col-12 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><strong>{t('technologiesTitle')}:</strong> {project.technologies.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
};

export default Projects;
