import React, { useContext, useState, useEffect } from "react";
import { CurrentThemeContext } from "../context/currentTheme";
import { getThemes, getUser } from "../api";

const Themes = () => {
  const { populateEditForm } = useContext(CurrentThemeContext);

  const [themes, setThemes] = useState();

  useEffect(() => {
    const getUserThemes = async () => {
      const user = await getUser();
      getThemes(user).then((res) => {
        setThemes(res);
      });
    };
    getUserThemes();
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "400px" }}>
      Themes
      {(themes &&
        themes.map((theme) => (
          <p onClick={() => populateEditForm(theme)}>{theme.themeName}</p>
        ))) ||
        (themes && themes.error)}
    </div>
  );
};

export default Themes;
