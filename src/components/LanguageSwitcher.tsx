import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ position: 'absolute', top: 10, right: 10 }}>
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>English</button>
      <button onClick={() => changeLanguage('zh')} disabled={i18n.language === 'zh'}>中文</button>
    </div>
  );
};

export default LanguageSwitcher;
