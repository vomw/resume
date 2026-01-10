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
        <div key={category} className="mb-3">
          <h5 className="text-capitalize">{t(`skillsCategories.${category}`)}</h5>
          <div className="d-flex flex-wrap">
            {(skillList as string[]).map((skill: string, index: number) => (
              <span key={index} className="badge bg-light text-dark border border-secondary me-2 mb-2">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </ResumeSection>
  );
};

export default Skills;
