import React, { useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useToDoState from "./hooks/useTodoState";

export default function ToDoApp() {
  const initialTodos = [
    { id: 1, task: "Learn About React Hooks", complete: false },
    {
      id: 2,
      task: "Build To Do List Application using hooks",
      complete: false
    },
    { id: 3, task: "Use Material UI Components", complete: false },
    { id: 4, task: "Implment Responsive Material UI Grid", complete: false }
  ];

  const { todos, addToDo, deleteToDo, updateToDo, toggleToDo } = useToDoState(
    JSON.parse(window.localStorage.getItem("todos")) || initialTodos
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
          <ToDoList
            todos={todos}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
