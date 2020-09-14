import Forms from "./components/Forms";
import Results from "./components/Results";
import Themes from "./components/Themes";
import React, { useContext } from "react";

function App() {
  return (
    <div className="App">
      <Forms />

      <Results />
      <Themes />
    </div>
  );
}

export default App;
