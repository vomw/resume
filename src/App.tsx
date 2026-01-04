import { useTranslation } from 'react-i18next';
import { ResumeData } from './types';
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
    personalInfo: t('personalInfo', { returnObjects: true }),
    summary: t('summary'),
    experience: t('experience', { returnObjects: true }),
    education: t('education', { returnObjects: true }),
    skills: t('skills', { returnObjects: true }),
    projects: t('projects', { returnObjects: true }),
  };

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
