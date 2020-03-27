import React, { createContext, useReducer } from "react";
import todosReducer from "../reducers/todoReducer";

export const ToDosContext = createContext();
export const DispatchContext = createContext();

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

export default function ToDosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <ToDosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ToDosContext.Provider>
  );
}
