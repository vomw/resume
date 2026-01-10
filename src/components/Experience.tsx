import React from 'react';
import ResumeSection from './ResumeSection';
import { useResumeData } from '../contexts/ResumeDataContext';

const Experience: React.FC = () => {
  const { resume } = useResumeData();

  if (!resume) return null;

  return (
    <ResumeSection title={resume.experienceTitle}>
      {resume.experience.map((exp, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{exp.title}</h5>
            <h6 className="card-subtitle mb-3 text-muted">{exp.company} | {exp.years}</h6>
            <ul className="mb-0">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </ResumeSection>
  );
};

export default Experience;
