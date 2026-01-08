// src/components/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
