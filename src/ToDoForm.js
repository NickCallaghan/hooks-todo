import React from "react";
import { TextField } from "@material-ui/core/";
import { Paper } from "@material-ui/core/";
import { withStyles } from "@material-ui/styles/";
import useInputState from "./hooks/useInputState";

const styles = {
  root: {
    marginTop: 64
  }
};

function ToDoForm(props) {
  const { classes } = props;
  const [newToDo, updateNewToDo] = useInputState("");
  return (
    <Paper className={classes.root}>
      <TextField value={newToDo} onChange={updateNewToDo} />
    </Paper>
  );
}

export default withStyles(styles)(ToDoForm);
