import React, { useContext } from "react";
import { CurrentThemeContext } from "../../context/currentTheme";
import EditForm from "./components/EditForm";
import NewForm from "./components/NewForm";

const Form = () => {
  const { currentTheme } = useContext(CurrentThemeContext);
  return <>{currentTheme ? <EditForm /> : <NewForm />}</>;
};

export default Form;
