import React, { useContext } from "react";
import { ResultsContext } from "../../../context/results";
import { CurrentThemeContext } from "../../../context/currentTheme";
const EditForm = () => {
  const { currentTheme } = useContext(CurrentThemeContext);

  return (
    <div>
      <div>Edit form: {currentTheme && currentTheme.themeName}</div>
    </div>
  );
};

export default EditForm;
