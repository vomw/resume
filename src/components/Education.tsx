import React from 'react';
import { Education as EducationType } from '../types';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">Education</h2>
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
