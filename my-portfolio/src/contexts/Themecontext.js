import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default'); // 'default' can be replaced with any theme you start with

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme; // This assumes you are using the body's class to style themes
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
