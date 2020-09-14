import React, { useContext, useEffect } from "react";
import { ResultsContext } from "../context/results";

const Results = () => {
  const { results, getResults } = useContext(ResultsContext);

  return (
    <div>
      {Object.entries(results).map(([word, value]) => (
        <p>
          {word}:{value}
        </p>
      ))}
    </div>
  );
};

export default Results;
