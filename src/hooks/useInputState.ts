import { useState } from "react";

export default (initialValue: String) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
