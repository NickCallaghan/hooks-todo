import React from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import useToggle from "./hooks/useInputState";

export default function ToDoListItem(props) {
  const { id, task, complete } = props.todo;
  const [isChecked, setIsChecked] = useToggle();

  const handleClick = e => {
    props.toggleToDo(id);
  };

  return (
    <div className="ToDoListItem" onClick={handleClick} data-id={id}>
      <ListItem>
        <Checkbox checked={complete} color="primary" />
        <ListItemText>{task}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
}
