import React, { useContext } from "react";
import { TextField } from "@material-ui/core/";
import { Paper } from "@material-ui/core/";
import { withStyles } from "@material-ui/styles/";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/ToDosContext";

const styles = {
  root: {
    marginTop: 64,
  },
};

type Props = {
  classes: any;
};

const ToDoForm: React.FC<Props> = ({ classes }) => {
  const [newToDoInput, updateNewToDoInput, resetNewToDoInput] = useInputState(
    ""
  );

  const dispatch = useContext(DispatchContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: newToDoInput });
    resetNewToDoInput();
  };

  return (
    <Paper className={classes.root}>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "1rem 0",
          padding: "0 0.5rem",
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
};

export default withStyles(styles)(ToDoForm);
