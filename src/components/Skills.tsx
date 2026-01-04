import React from 'react';
import { Skills as SkillsType } from '../types';

interface SkillsProps {
  skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row justify-content-center">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h5>
                <ul className="list-group list-group-flush">
                  {skillList.map((skill: string, index: number) => (
                    <li key={index} className="list-group-item">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
