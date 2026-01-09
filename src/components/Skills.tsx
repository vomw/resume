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
      <div className="row justify-content-center">
        {Object.entries(resume.skills).map(([category, skillList]) => (
          <div key={category} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-capitalize">{t(`skillsCategories.${category}`)}</h5>
                <ul className="list-group list-group-flush">
                  {(skillList as string[]).map((skill: string, index: number) => (
                    <li key={index} className="list-group-item">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
};

export default Skills;
