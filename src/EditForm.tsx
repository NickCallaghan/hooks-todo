import React, { useContext } from "react";
import { TextField } from "@material-ui/core/";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/ToDosContext";

type Props = {
  task: string;
  id: string;
  toggleEditing: () => void;
};

const EditForm = ({ task, id, toggleEditing }: Props) => {
  const dispatch = useContext(DispatchContext);
  const [inputValue, updateInputValue] = useInputState(task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "EDIT", task: inputValue, id: id });
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
};

export default EditForm;
