import React from 'react';
import { useTranslation } from 'react-i18next';
import { Skills as SkillsType } from '../types';
import CanvasText from './CanvasText';

interface SkillsProps {
  skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { t } = useTranslation();
  return (
    <section className="my-5">
      <div className="text-center mb-4">
        <CanvasText text={t('skillsTitle')} fontSize={32} />
      </div>
      <div className="row justify-content-center">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title text-capitalize">
                  <CanvasText text={t(`skillsCategories.${category}`)} fontSize={20} />
                </div>
                <ul className="list-group list-group-flush">
                  {skillList.map((skill: string, index: number) => (
                    <li key={index} className="list-group-item">
                      <CanvasText text={skill} fontSize={16} />
                    </li>
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
