import React from "react";
import { TextField } from "@material-ui/core/";
import useInputState from "./hooks/useInputState";

export default function EditForm(props) {
  const { task, id, updateToDo, toggleEditing } = props;
  const [inputValue, updateInputValue] = useInputState();

  const handleSubmit = e => {
    e.preventDefault();
    updateToDo(inputValue, id);
    toggleEditing();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={inputValue} onChange={updateInputValue} fullWidth />
    </form>
  );
}
