import React, { createContext, useState } from "react";
import axios from "axios";

export const CurrentThemeContext = createContext();

export const CurrentThemeProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState(false);

  const populateEditForm = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, populateEditForm }}>
      {props.children}
    </CurrentThemeContext.Provider>
  );
};
