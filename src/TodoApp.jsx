import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import FilterTodos from "./components/FilterTodos";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };
  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : { ...prevTodo }
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider value={{ todos, addTodo, toggleCompleted, deleteTodo, filter , setFilter }}>
        <div className="flex justify-center items-center flex-col mt-10">
          <h1 className="text-5xl font-bold text-sky-400 tracking-wide mb-5">
            Todo App
          </h1>
          <CreateTodo />
          <FilterTodos />
          <TodoList />
        </div>
      </TodoProvider>
    </>
  );
}

export default TodoApp;
