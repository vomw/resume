import React from 'react';
import ResumeSection from './ResumeSection';
import { useResumeData } from '../contexts/ResumeDataContext';

const Summary: React.FC = () => {
  const { resume } = useResumeData();

  if (!resume) return null;

  return (
    <ResumeSection title={resume.summaryTitle}>
      <p className="lead">{resume.summary}</p>
    </ResumeSection>
  );
};

export default Summary;
