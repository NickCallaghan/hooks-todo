// { id: 1, task: "Learn About React Hooks", complete: false },

export type Todo = {
  id: string;
  task: string;
  complete: boolean;
};

export type Todos = Array<Todo>;
