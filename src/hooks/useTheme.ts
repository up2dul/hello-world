import { useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', theme);
  };

  return {
    theme,
    toggleTheme,
  };
}
