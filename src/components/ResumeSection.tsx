import React from 'react';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default ResumeSection;
