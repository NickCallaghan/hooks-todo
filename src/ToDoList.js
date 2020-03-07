import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function ToDoList(props) {
  const { todos } = props;
  return (
    <Paper>
      <List>
        {todos.map(todo => {
          return (
            <>
              <ListItem key={todo.id}>
                <ListItemText>{todo.task}</ListItemText>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </Paper>
  );
}
