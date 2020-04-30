import { useReducer } from "react";
import { Todos } from "../types/types";
import todosReducer from "../reducers/todoReducer";
import useLocalStorageReducer from "./useLocalStorageReducer";

// export default function (initialTodos: Todos): {} {
//   const [todos, dispatch] = useLocalStorageReducer(
//     "todos",
//     initialTodos,
//     todosReducer
//   );
//   return {
//     todos,
//     dispatch,
//   };
// }

const useTodoState = (
  intialTodos: Todos
): { todos: Todos; dispatch: React.Dispatch<any> } => {
  const [todos, dispatch] = useReducer(todosReducer, intialTodos);

  return {
    todos,
    dispatch,
  };
};

export default useTodoState;
