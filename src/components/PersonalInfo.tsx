import React from 'react';
import { useResumeData } from '../contexts/ResumeDataContext';

const PersonalInfo: React.FC = () => {
  const { resume } = useResumeData();

  if (!resume) return null;

  const { personalInfo } = resume;

  return (
    <section className="text-center my-5 resume-section">
      <h1 className="display-4">{personalInfo.name}</h1>
      <p className="lead">{personalInfo.title}</p>
      <div className="contact-info">
        <p>Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
        <p>Phone: {personalInfo.phone}</p>
        <p>LinkedIn: <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a></p>
        <p>GitHub: <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a></p>
      </div>
    </section>
  );
};

export default PersonalInfo;
