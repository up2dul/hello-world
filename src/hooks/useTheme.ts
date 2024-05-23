import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (currentTheme) {
      setTheme(currentTheme);
      document.body.classList.add(currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.body.classList.add(newTheme);
      document.body.classList.remove(prevTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return {
    theme,
    toggleTheme,
  };
}
