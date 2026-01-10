import { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ResumeData, PersonalInfo, Experience, Education, Skills, Project } from '../types';
import { resumeLoadingError } from '../i18n';

interface ResumeDataContextType {
  resume: ResumeData | null;
  isLoading: boolean;
  error: Error | null;
}

const ResumeDataContext = createContext<ResumeDataContextType | undefined>(undefined);

export const ResumeDataProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n } = useTranslation();

  const isLoading = !i18n.isInitialized;

  const resume: ResumeData | null = isLoading ? null : {
    personalInfo: t('personalInfo', { returnObjects: true }) as PersonalInfo,
    summary: t('summary'),
    summaryTitle: t('summaryTitle'),
    experience: t('experience', { returnObjects: true }) as Experience[],
    experienceTitle: t('experienceTitle'),
    education: t('education', { returnObjects: true }) as Education[],
    educationTitle: t('educationTitle'),
    skills: t('skills', { returnObjects: true }) as Skills,
    skillsTitle: t('skillsTitle'),
    projects: t('projects', { returnObjects: true }) as Project[],
    projectsTitle: t('projectsTitle'),
  };

  const value = {
    resume,
    isLoading,
    error: resumeLoadingError,
  };

  return (
    <ResumeDataContext.Provider value={value}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export const useResumeData = () => {
  const context = useContext(ResumeDataContext);
  if (context === undefined) {
    throw new Error('useResumeData must be used within a ResumeDataProvider');
  }
  return context;
};
