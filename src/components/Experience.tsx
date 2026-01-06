import React from 'react';
import { useTranslation } from 'react-i18next';
import { Experience as ExperienceType } from '../types';
import CanvasText from './CanvasText';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const { t } = useTranslation();
  return (
    <section className="my-5">
      <div className="text-center mb-4">
        <CanvasText text={t('experienceTitle')} fontSize={32} />
      </div>
      {experience.map((exp, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <CanvasText text={exp.title} fontSize={20} className="card-title" />
            <CanvasText text={`${exp.company} | ${exp.years}`} fontSize={16} className="card-subtitle mb-2 text-muted" />
            <ul className="card-text">
              {exp.description.map((desc, idx) => (
                <li key={idx}>
                  <CanvasText text={desc} fontSize={16} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
