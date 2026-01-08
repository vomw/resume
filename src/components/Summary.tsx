import React from 'react';
import { useTranslation } from 'react-i18next';

const Summary: React.FC = () => {
  const { t } = useTranslation();
  const summary = t('summary');

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{t('summaryTitle')}</h2>
      <p className="text-center lead">{summary}</p>
    </section>
  );
};

export default Summary;
