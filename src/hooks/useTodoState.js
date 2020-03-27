import { v4 as uuidv4 } from "uuid";
import useLocalStorageReducer from "./useLocalStorageReducer";

export default initialTodos => {
  const [todos, dispatch] = useLocalStorageReducer("todos", initialTodos);
  return {
    todos,
    dispatch
};
