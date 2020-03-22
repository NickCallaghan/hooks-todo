import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addToDo: newToDoText => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newToDoText, complete: false }
      ]);
    },
    toggleToDo: id => {
      const updatedTodos = todos.map(t =>
        t.id !== id ? t : { ...t, complete: !t.complete }
      );
      setTodos([...updatedTodos]);
    },
    updateToDo: (updatedText, id) => {
      const updatedTodos = todos.map(t =>
        t.id !== id ? t : { ...t, task: updatedText }
      );
      setTodos([...updatedTodos]);
    },
    deleteToDo: id => {
      const newTodos = todos.filter(t => t.id !== id);
      setTodos([...newTodos]);
    }
  };
};
