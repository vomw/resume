import React from 'react';
import { useTranslation } from 'react-i18next';
import ResumeSection from './ResumeSection';
import { useResumeData } from '../contexts/ResumeDataContext';

const Skills: React.FC = () => {
  const { resume } = useResumeData();
  const { t } = useTranslation();

  if (!resume) return null;

  return (
    <ResumeSection title={resume.skillsTitle}>
      {Object.entries(resume.skills).map(([category, skillList]) => (
        <div key={category} className="pb-3">
          <h5 className="text-capitalize mb-2">{t(`skillsCategories.${category}`)}</h5>
          <p>{(skillList as string[]).join(', ')}</p>
        </div>
      ))}
    </ResumeSection>
  );
};

export default Skills;
