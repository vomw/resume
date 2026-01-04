import { useState, useEffect } from 'react';
import { ResumeData } from './types';
import './App.css';

// Import components
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  const [resume, setResume] = useState<ResumeData | null>(null);

  useEffect(() => {
    fetch('/resume.json')
      .then(response => response.json())
      .then(data => setResume(data as ResumeData))
      .catch(error => console.error('Error fetching resume data:', error));
  }, []);

  if (!resume) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Loading resume...</div>;
  }

  return (
    <div className="container my-5">
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
