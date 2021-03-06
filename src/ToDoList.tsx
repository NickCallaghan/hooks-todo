import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ToDoListItem from "./ToDoListItem";
import Divider from "@material-ui/core/Divider";
import { ToDosContext } from "./contexts/ToDosContext";

const ToDoList: React.FC = () => {
  const todos = useContext(ToDosContext);
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
            <ToDoListItem todo={todo} key={todo.id} />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default ToDoList;
