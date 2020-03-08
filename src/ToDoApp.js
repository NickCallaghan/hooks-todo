import React, { useState } from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { v4 as uuidv4 } from "uuid";

export default function ToDoApp() {
  const initialTodos = [
    { id: 1, task: "Wash the car", complete: false },
    { id: 2, task: "Wash the van", complete: false },
    { id: 3, task: "Walk the dog", complete: false },
    { id: 4, task: "Grow Beard", complete: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addToDo = newToDoText => {
    setTodos([...todos, { id: uuidv4(), task: newToDoText, complete: false }]);
  };

  const toggleToDo = id => {
    const updatedTodos = todos.map(t =>
      t.id !== id ? t : { id: t.id, task: t.task, complete: !t.complete }
    );
    // todo.complete = !todo.complete;
    setTodos([...updatedTodos]);
  };

  return (
    <Paper
      style={{
        paddigTop: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
    >
      <AppBar color="primary" postion="static" style={{ height: "64x" }}>
        <ToolBar>
          <Typography color="inherit">To Do App with React Hooks</Typography>
        </ToolBar>
      </AppBar>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "2rem" }}
      >
        <Grid item xs={11} sm={10} md={8} lg={6}>
          <ToDoForm addToDo={addToDo} />
          <ToDoList todos={todos} toggleToDo={toggleToDo} />
        </Grid>
      </Grid>
    </Paper>
  );
}