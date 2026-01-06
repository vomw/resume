import React from 'react';
import { useTranslation } from 'react-i18next';
import { Education as EducationType } from '../types';
import CanvasText from './CanvasText';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const { t } = useTranslation();
  return (
    <section className="my-5">
      <div className="text-center mb-4">
        <CanvasText text={t('educationTitle')} fontSize={32} />
      </div>
      {education.map((edu, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <CanvasText text={edu.degree} fontSize={20} className="card-title" />
            <CanvasText text={`${edu.university} | ${edu.years}`} fontSize={16} className="card-subtitle mb-2 text-muted" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
