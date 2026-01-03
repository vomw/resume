import React from 'react';

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">Summary</h2>
      <p className="text-center lead">{summary}</p>
    </section>
  );
};

export default Summary;
