import React, { createContext } from "react";
import useToDoState from "../hooks/useTodoState";

export const ToDosContext = createContext();

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
  const todoStuff = useToDoState(initialTodos);

  return (
    <ToDosContext.Provider value={todoStuff}>
      {props.children}
    </ToDosContext.Provider>
  );
}
