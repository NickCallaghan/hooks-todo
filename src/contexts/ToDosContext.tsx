import React, { createContext } from "react";
import { Todos } from "../types/types";
import useTodoState from "../hooks/useTodoState";

const initialTodos: Todos = [
  { id: "1", task: "Learn About React Hooks", complete: false },
  {
    id: "2",
    task: "Build To Do List Application using hooks",
    complete: false,
  },
  { id: "3", task: "Use Material UI Components", complete: false },
  { id: "4", task: "Implment Responsive Material UI Grid", complete: false },
];

export const ToDosContext = createContext<Todos>(initialTodos);
export const DispatchContext = createContext<React.Dispatch<any>>(() => {});

const ToDosProvider: React.FC = ({ children }) => {
  const { todos, dispatch } = useTodoState(initialTodos);
  console.log(todos);

  return (
    <ToDosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ToDosContext.Provider>
  );
};

export default ToDosProvider;
