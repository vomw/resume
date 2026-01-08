import React from 'react';
import { useTranslation } from 'react-i18next';
import { PersonalInfo as PersonalInfoType } from '../types';

const PersonalInfo: React.FC = () => {
  const { t } = useTranslation();
  const personalInfo = t('personalInfo', { returnObjects: true }) as PersonalInfoType;

  return (
    <section className="text-center my-5">
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
