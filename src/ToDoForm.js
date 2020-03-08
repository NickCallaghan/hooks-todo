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
  const [newToDoInput, updateNewToDoInput, resetNewToDoInput] = useInputState(
    ""
  );

  const handleSubmit = e => {
    e.preventDefault();
    props.addToDo(newToDoInput);
    resetNewToDoInput();
  };

  return (
    <Paper className={classes.root}>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "1rem 0",
          padding: "0 0.5rem"
        }}
      >
        <TextField
          value={newToDoInput}
          onChange={updateNewToDoInput}
          label="Add new task"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default withStyles(styles)(ToDoForm);