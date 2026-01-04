import React from 'react';
import { useTranslation } from 'react-i18next';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const { t } = useTranslation();
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{t('experienceTitle')}</h2>
      {experience.map((exp, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{exp.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{exp.company} | {exp.years}</h6>
            <ul className="card-text">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
