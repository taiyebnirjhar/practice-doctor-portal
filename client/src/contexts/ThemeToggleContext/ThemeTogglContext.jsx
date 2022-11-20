import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeTogglContext({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const themeData = { darkMode, setDarkMode };

  return (
    <>
      <ThemeContext.Provider value={themeData}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeTogglContext;
