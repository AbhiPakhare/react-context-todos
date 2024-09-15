import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
  filter: "",
});
export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
