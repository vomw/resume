import React from 'react';
import { useTranslation } from 'react-i18next';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  const { t } = useTranslation();
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{t('summaryTitle')}</h2>
      <p className="text-center lead">{summary}</p>
    </section>
  );
};

export default Summary;
