// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';
  const darkTheme = {
    background: '#1a1a2e',
    backgroundSecondary: '#37435f',
    text: '#ffffff',
  };

  const lightTheme = {
    background: '#f0f8ff',
    backgroundSecondary: '#ffffff',
    text: '#1a1a2e',
  };

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
