import { useState } from "react";
export default intiialValue => {
  const [value, setValue] = useState(intiialValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
