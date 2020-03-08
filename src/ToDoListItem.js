import React from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "./hooks/useToggle";
import { TextField } from "@material-ui/core/";

export default function ToDoListItem(props) {
  const { id, task, complete } = props.todo;
  const [editing, toggleEditing] = useToggle();

  const handleCheck = () => {
    props.toggleToDo(id);
  };

  const handleDelete = () => {
    props.deleteToDo(id);
  };

  const handleEditToggle = () => {
    toggleEditing();
    console.log(`Editing: ${editing}`);
  };

  return (
    <div
      className="ToDoListItem"
      style={{ textDecoration: complete ? "line-through" : "none" }}
    >
      <ListItem>
        <Checkbox checked={complete} color="primary" onClick={handleCheck} />
        {editing ? (
          <TextField value={task} />
        ) : (
          <ListItemText>{task}</ListItemText>
        )}
        <ListItemSecondaryAction>
          <IconButton onClick={handleEditToggle} aria-label="Edit To Do">
            <EditIcon />
          </IconButton>

          <IconButton onClick={handleDelete} aria-label="Delete To Do">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
}
