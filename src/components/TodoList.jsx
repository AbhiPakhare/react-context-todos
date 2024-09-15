import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context";
const TodoList = () => {
  const { todos, filter } = useTodo();
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return "all";
    } else if (filter === "completed") {
      return todo.completed;
    } else if (filter === "pending") {
      return !todo.completed;
    } else {
      console.error("invalid filter");
    }
  });
  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
