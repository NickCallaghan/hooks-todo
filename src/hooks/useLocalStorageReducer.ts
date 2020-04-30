import { useReducer, useEffect } from "react";
import { Todos } from "../types/types";
import { Actions } from "./../reducers/todoReducer";

const useLocalStorageStateReducer = (
  key: string,
  defaultVal: Todos,
  reducer: React.Reducer<Todos, Actions>
): [Todos, React.Dispatch<any>] => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

export default useLocalStorageStateReducer;
