import { useState, useEffect } from 'react';

const useDarkMode = (initialTheme) => {
  // Retrieve the theme from localStorage or use the initialTheme if provided
  const storedTheme = localStorage.getItem('theme') || initialTheme;

  // Set the initial theme state
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-background');
    } else {
      document.body.classList.remove('dark-background');
    }
    // Add or remove the 'dark' class from the document element based on the theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the current theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Define the handleThemeSwitch function to toggle between 'light' and 'dark' themes
  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return { theme, handleThemeSwitch };
};

export default useDarkMode;
