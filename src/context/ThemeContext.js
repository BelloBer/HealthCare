// src/context/ThemeContext.js
import React, { createContext, useState } from 'react';
import { theme, lightTheme, darkTheme } from '../styles/theme';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const getTheme = () => {
    switch (currentTheme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return theme;
    }
  };

  return (
    <ThemeContext.Provider value={{ getTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
