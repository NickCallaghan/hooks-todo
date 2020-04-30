import { useState } from "react";

const useInputState = (
  initialValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};

export default useInputState;
