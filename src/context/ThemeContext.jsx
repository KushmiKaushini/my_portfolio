import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');

    // Fallback to system preference
    let initialTheme = savedTheme;
    if (!initialTheme) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      initialTheme = systemPrefersDark ? 'dark' : 'light';
    }

    // Apply theme
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    localStorage.setItem('portfolio-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      return newTheme;
    });
  };

  const value = {
    theme,
    toggleTheme,
    isClient,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
