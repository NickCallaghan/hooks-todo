import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ToDosProvider from "./contexts/ToDosContext";

const ToDoApp: React.FC = () => {
  return (
    <Paper
      style={{
        paddingTop: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64x" }}>
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
          <ToDosProvider>
            <ToDoForm />
            <ToDoList />
          </ToDosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoApp;
