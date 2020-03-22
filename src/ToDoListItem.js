import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "./hooks/useToggle";
import EditForm from "./EditForm";
import { ToDosContext } from "./contexts/ToDosContext";

export default function ToDoListItem(props) {
  const { id, task, complete } = props.todo;
  const { updateToDo, deleteToDo, toggleToDo } = useContext(ToDosContext);
  const [editing, toggleEditing] = useToggle();

  const handleCheck = () => {
    toggleToDo(id);
  };

  const handleDelete = () => {
    deleteToDo(id);
  };

  const handleEditToggle = () => {
    toggleEditing();
  };

  return (
    <div
      className="ToDoListItem"
      style={{ textDecoration: complete ? "line-through" : "none" }}
    >
      <ListItem style={{ height: "64px" }}>
        {editing ? (
          <EditForm
            id={id}
            key={id}
            task={task}
            toggleEditing={toggleEditing}
          />
        ) : (
          <>
            <Checkbox
              checked={complete}
              color="primary"
              onClick={handleCheck}
            />

            <ListItemText>{task}</ListItemText>

            <ListItemSecondaryAction>
              <IconButton onClick={handleEditToggle} aria-label="Edit To Do">
                <EditIcon />
              </IconButton>

              <IconButton onClick={handleDelete} aria-label="Delete To Do">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}
