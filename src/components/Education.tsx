import React from 'react';
import ResumeSection from './ResumeSection';
import { useResumeData } from '../contexts/ResumeDataContext';

const Education: React.FC = () => {
  const { resume } = useResumeData();

  if (!resume) return null;

  return (
    <ResumeSection title={resume.educationTitle}>
      {resume.education.map((edu, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{edu.degree}</h5>
            <h6 className="card-subtitle mb-3 text-muted">{edu.university} | {edu.years}</h6>
          </div>
        </div>
      ))}
    </ResumeSection>
  );
};

export default Education;
