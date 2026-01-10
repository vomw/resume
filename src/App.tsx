import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useResumeData } from './contexts/ResumeDataContext';
import './App.css';

import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { resume, isLoading, error } = useResumeData();
  const { t } = useTranslation();

  useEffect(() => {
    if (resume?.personalInfo) {
      document.title = t('pageTitle', { name: resume.personalInfo.name });
    }
  }, [resume, t]);

  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Loading resume...</div>;
  }

  if (error || !resume) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Error loading resume data.</div>;
  }

  return (
    <div className="container my-5">
      <LanguageSwitcher />
      <PersonalInfo />
      <div className="row">
        <div className="col-lg-8">
          <Summary />
          <Experience />
          <Education />
          <Projects />
        </div>
        <div className="col-lg-4">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
