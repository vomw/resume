// src/contexts/ResumeDataContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ResumeData, PersonalInfo, Experience, Education, Skills, Project } from '../types';

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
    experience: t('experience', { returnObjects: true }) as Experience[],
    education: t('education', { returnObjects: true }) as Education[],
    skills: t('skills', { returnObjects: true }) as Skills,
    projects: t('projects', { returnObjects: true }) as Project[],
  };

  const value = {
    resume,
    isLoading,
    error: i18n.loadError,
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
