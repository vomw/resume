import React from 'react';
import { useResumeData } from '../contexts/ResumeDataContext';

const PersonalInfo: React.FC = () => {
  const { resume } = useResumeData();

  if (!resume) return null;

  const { personalInfo } = resume;

  return (
    <section className="resume-section text-center py-5">
      <h1 className="display-4">{personalInfo.name}</h1>
      <p className="lead">{personalInfo.title}</p>
      <div className="contact-info mt-4">
        <ul className="list-unstyled">
          <li className="mb-2">
            Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </li>
          <li className="mb-2">
            Phone: {personalInfo.phone}
          </li>
          <li className="mb-2">
            LinkedIn: <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>
          </li>
          <li className="mb-2">
            GitHub: <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PersonalInfo;
