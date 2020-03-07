import React, { useState } from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

export default function ToDoApp() {
  const initialTodos = [
    { id: 1, task: "Wash the car", complete: true },
    { id: 2, task: "Wash the van", complete: true },
    { id: 3, task: "Walk the dog", complete: true },
    { id: 4, task: "Grow Beard", complete: true }
  ];

  const [todos, setTodos] = useState(initialTodos);

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

      <ToDoForm />
      <ToDoList todos={todos} />
    </Paper>
  );
}
