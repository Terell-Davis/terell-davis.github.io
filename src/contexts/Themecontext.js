import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') || 'default-theme';
  const [theme, setTheme] = useState(storedTheme);
  
  useEffect(() => {
    document.body.className = storedTheme; // Apply stored theme immediately on load
  }, [storedTheme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save new theme to local storage
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
