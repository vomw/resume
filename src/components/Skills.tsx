import React from 'react';
import { useTranslation } from 'react-i18next';
import { Skills as SkillsType } from '../types';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true }) as SkillsType;

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">{t('skillsTitle')}</h2>
      <div className="row justify-content-center">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-capitalize">{t(`skillsCategories.${category}`)}</h5>
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
