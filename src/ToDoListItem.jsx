import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "./hooks/useToggle";
import EditForm from "./EditForm";
import { DispatchContext } from "./contexts/ToDosContext";
import { Todo } from "./types/types";
import { Actions } from "./reducers/todoReducer";

// type Props = {
//   todo: Todo;
// };

function ToDoListItem({ todo }) {
  const { id, task, complete } = todo;
  const dispatch = useContext(DispatchContext);
  const [editing, toggleEditing] = useToggle();

  const handleCheck = () => {
    dispatch({ type: "TOGGLE", id: id });
  };

  const handleDelete = () => {
    dispatch({ type: "REMOVE", id: id });
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

export default memo(ToDoListItem);
