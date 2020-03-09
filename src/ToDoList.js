import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ToDoListItem from "./ToDoListItem";
import Divider from "@material-ui/core/Divider";

export default function ToDoList(props) {
  const { todos, toggleToDo, deleteToDo, updateToDo } = props;
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
            <ToDoListItem
              todo={todo}
              key={todo.id}
              toggleToDo={toggleToDo}
              deleteToDo={deleteToDo}
              updateToDo={updateToDo}
            />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
