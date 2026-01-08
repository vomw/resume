import React from 'react';
import { useTranslation } from 'react-i18next';
import { useResumeData } from '../contexts/ResumeDataContext';

const Summary: React.FC = () => {
  const { t } = useTranslation();
  const { resume } = useResumeData();

  if (!resume?.summary) {
    return null;
  }

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{t('summaryTitle')}</h2>
      <p className="text-center lead">{resume.summary}</p>
    </section>
  );
};

export default Summary;
