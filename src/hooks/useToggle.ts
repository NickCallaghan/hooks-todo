import { useState } from "react";

export default (initalValue = false) => {
  const [value, setValue] = useState(initalValue);
  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle];
};
