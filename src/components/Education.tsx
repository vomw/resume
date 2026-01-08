import React from 'react';
import { useTranslation } from 'react-i18next';
import { Education as EducationType } from '../types';

const Education: React.FC = () => {
  const { t } = useTranslation();
  const education = t('education', { returnObjects: true }) as EducationType[];

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{t('educationTitle')}</h2>
      {education.map((edu, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{edu.degree}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{edu.university} | {edu.years}</h6>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
