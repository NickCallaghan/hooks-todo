import React from "react";
import { TextField } from "@material-ui/core/";
import useInputState from "./hooks/useInputState";

export default function EditForm(props) {
  const { task, id, updateToDo, toggleEditing } = props;
  const [inputValue, updateInputValue] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    updateToDo(inputValue, id);
    toggleEditing();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", marginLeft: "1rem" }}>
      <TextField
        value={inputValue}
        onChange={updateInputValue}
        fullWidth
        autoFocus
      />
    </form>
  );
}
