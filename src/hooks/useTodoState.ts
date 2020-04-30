import { Todos } from "../types/types";
import todosReducer from "../reducers/todoReducer";
import useLocalStorageReducer from "./useLocalStorageReducer";

// useTodoState returns state and dispatch function to manage todos. The useLocalStorageReducer syncs the state inand out of local storage

const useTodoState = (
  intialTodos: Todos
): { todos: Todos; dispatch: React.Dispatch<any> } => {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    intialTodos,
    todosReducer
  );
  return {
    todos,
    dispatch,
  };
};
export default useTodoState;
