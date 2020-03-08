import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ToDoListItem from "./ToDoListItem";

export default function ToDoList(props) {
  const { todos, toggleToDo } = props;
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <ToDoListItem todo={todo} key={todo.id} toggleToDo={toggleToDo} />
        ))}
      </List>
    </Paper>
  );
}
