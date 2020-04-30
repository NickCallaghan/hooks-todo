import { v4 as uuidv4 } from "uuid";
import { Todos } from "../types/types";

export type Actions =
  | { type: "ADD"; task: string }
  | { type: "TOGGLE"; id: string }
  | { type: "EDIT"; task: string; id: String }
  | { type: "REMOVE"; id: string };

const todoReducer: React.Reducer<Todos, Actions> = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [...todos, { id: uuidv4(), task: action.task, complete: false }];
    case "TOGGLE":
      return todos.map((t) =>
        action.id !== t.id ? t : { ...t, complete: !t.complete }
      );
    case "EDIT":
      return todos.map((t) =>
        t.id !== action.id ? t : { ...t, task: action.task }
      );
    case "REMOVE":
      return todos.filter((t) => action.id !== t.id);
    default:
      return todos;
  }
};

export default todoReducer;
