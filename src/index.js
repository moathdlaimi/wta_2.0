import React from "react";
import ReactDOM from "react-dom";
import { ResultsProvider } from "./context/results";
import { CurrentThemeProvider } from "./context/currentTheme";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CurrentThemeProvider>
      <ResultsProvider>
        <App />
      </ResultsProvider>
    </CurrentThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
