import { v4 as uuidv4 } from "uuid";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [...todos, { id: uuidv4(), task: action.task, complete: false }];
    case "TOGGLE":
      return todos.map(t =>
        action.id !== t.id ? t : { ...t, complete: !t.complete }
      );
    case "EDIT":
      return todos.map(t =>
        t.id !== action.id ? t : { ...t, task: action.task }
      );
    case "REMOVE":
      return todos.filter(t => action.id !== t.id);
    default:
      return todos;
  }
};

export default todoReducer;
