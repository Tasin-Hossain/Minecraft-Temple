import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // Start with null, will load from localStorage
  const [color, setColor] = useState('#ffac11'); // Default color

  const defaultTheme = 'dark';
  const defaultColor = '#ffac11';

  useEffect(() => {
    // Load the theme from localStorage
    const savedTheme = localStorage.getItem('theme') || defaultTheme;
    const savedColor = localStorage.getItem('themeColor') || defaultColor;

    // Set the theme and color in state
    setTheme(savedTheme);
    setColor(savedColor);

    // Apply theme and color to the document
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.style.setProperty('--custom-color', savedColor);
  }, []);

  useEffect(() => {
    if (theme === null) return; // Don't proceed if theme hasn't loaded yet

    // Save theme and color to localStorage whenever they change
    localStorage.setItem('theme', theme);
    localStorage.setItem('themeColor', color);

    // Apply theme and color to the document
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.setProperty('--custom-color', color);
  }, [theme, color]);

  const resetTheme = () => {
    setTheme(defaultTheme);
    setColor(defaultColor);

    localStorage.removeItem('theme');
    localStorage.removeItem('themeColor');

    document.documentElement.setAttribute('data-theme', defaultTheme);
    document.documentElement.style.setProperty('--custom-color', defaultColor);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
