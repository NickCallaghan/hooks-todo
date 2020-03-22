import React, { useContext } from "react";
import { TextField } from "@material-ui/core/";
import useInputState from "./hooks/useInputState";
import { ToDosContext } from "./contexts/ToDosContext";

export default function EditForm(props) {
  const { task, id, toggleEditing } = props;
  const { updateToDo } = useContext(ToDosContext);
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
