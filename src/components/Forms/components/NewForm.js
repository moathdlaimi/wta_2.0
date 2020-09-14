import React, { useContext, useEffect, useState } from "react";
import { ResultsContext } from "../../../context/results";
import { getUser, postTheme } from "../../../api";
import { v4 as uuidv4 } from "uuid";

const NewForm = () => {
  const { results, getResults } = useContext(ResultsContext);
  const [values, setValues] = useState();
  const [themeWords, setThemeWords] = useState([]);

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    console.log(values);
  };

  const buildThemeWordsArray = () => {
    const themeWord = document.querySelector("#themeWords");

    setThemeWords((themeWords) => [...themeWords, themeWord.value]);
    console.log(themeWords);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postTheme({
        userId: getUser(),
        themeId: uuidv4(),
        themeName: values.themeName,
        themeWords,
      });
      await getResults(values.url, themeWords);
      setValues(false);
      setThemeWords([]);
    } catch (error) {}
  };

  return (
    <div>
      <form
        style={{ display: "grid", width: "400px", gap: "2em" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="url"
          value={values ? values.url : ""}
          onChange={handleChange}
        />

        <input type="text" name="themeWords" id="themeWords" />
        <button
          disabled={themeWords.length >= 3 ? true : false}
          onClick={buildThemeWordsArray}
          type="button"
        >
          Add
        </button>

        <input
          type="text"
          name="themeName"
          value={values ? values.themeName : ""}
          onInput={handleChange}
        />
        <input
          type="submit"
          value="Save theme and scan results"
          disabled={!values || !values.themeName ? true : false}
        />
      </form>
    </div>
  );
};

export default NewForm;
