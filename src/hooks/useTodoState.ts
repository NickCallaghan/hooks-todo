import useLocalStorageReducer from "./useLocalStorageReducer";
import { Todos } from "../types/types";
import todoReducer from "../reducers/todoReducer";

export default (initialTodos: Todos) => {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    initialTodos,
    todoReducer
  );
  return {
    todos,
    dispatch,
  };
};
