import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ResumeData, PersonalInfo as PersonalInfoType, Experience as ExperienceType, Education as EducationType, Skills as SkillsType, Project as ProjectType } from './types';
import './App.css';

// Import components
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';


function App() {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Loading resume...</div>;
  }

  const resume: ResumeData = {
    personalInfo: t('personalInfo', { returnObjects: true }) as PersonalInfoType,
    summary: t('summary'),
    experience: t('experience', { returnObjects: true }) as ExperienceType[],
    education: t('education', { returnObjects: true }) as EducationType[],
    skills: t('skills', { returnObjects: true }) as SkillsType,
    projects: t('projects', { returnObjects: true }) as ProjectType[],
  };

  useEffect(() => {
    if (resume.personalInfo) {
      document.title = t('pageTitle', { name: resume.personalInfo.name });
    }
  }, [resume.personalInfo, t]);

  return (
    <div className="container my-5">
      <LanguageSwitcher />
      <PersonalInfo personalInfo={resume.personalInfo} />
      <hr />
      <Summary summary={resume.summary} />
      <hr />
      <Experience experience={resume.experience} />
      <hr />
      <Education education={resume.education} />
      <hr />
      <Skills skills={resume.skills} />
      <hr />
      <Projects projects={resume.projects} />
    </div>
  );
}

export default App;
