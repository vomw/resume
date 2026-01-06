import React from 'react';
import { useTranslation } from 'react-i18next';
import { PersonalInfo as PersonalInfoType } from '../types';
import CanvasText from './CanvasText';

interface PersonalInfoProps {
  personalInfo: PersonalInfoType;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
  const { t } = useTranslation();
  return (
    <section className="text-center my-5">
      <CanvasText text={personalInfo.name} fontSize={48} className="display-4" />
      <CanvasText text={personalInfo.title} fontSize={24} className="lead" />
      <div className="contact-info">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <CanvasText text={t('emailLabel')} fontSize={16} />
          <a href={`mailto:${personalInfo.email}`}>
            <CanvasText text={personalInfo.email} fontSize={16} />
          </a>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <CanvasText text={t('phoneLabel')} fontSize={16} />
          <CanvasText text={personalInfo.phone} fontSize={16} />
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <CanvasText text={t('linkedinLabel')} fontSize={16} />
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
            <CanvasText text={personalInfo.linkedin} fontSize={16} />
          </a>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
          <CanvasText text={t('githubLabel')} fontSize={16} />
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
            <CanvasText text={personalInfo.github} fontSize={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
