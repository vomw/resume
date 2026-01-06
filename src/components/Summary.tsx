import React from 'react';
import { useTranslation } from 'react-i18next';
import CanvasText from './CanvasText';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  const { t } = useTranslation();
  return (
    <section className="my-5">
      <div className="text-center mb-4">
        <CanvasText text={t('summaryTitle')} fontSize={32} />
      </div>
      <div className="text-center lead">
        <CanvasText text={summary} fontSize={18} />
      </div>
    </section>
  );
};

export default Summary;
