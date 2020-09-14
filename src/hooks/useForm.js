import { useState } from "react";

const UseForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    e.persist();

    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  console.log(state);

  return [state, setState, handleChange];
};

export default UseForm;
