import React, { useState } from "react";
import { useTodo } from "../context";
const FilterTodos = () => {
  const { setFilter: setTodosFilter } = useTodo();

  const handleFilterChange = (event) => {
    const action = event.target.dataset.action;
    setTodosFilter(action);
  };

  return (
    <div className="flex mt-2" onClick={handleFilterChange}>
      <button
        className="rounded-full py-1 px-2 bg-teal-400 text-white"
        data-action="all"
      >
        All
      </button>
      <button
        className="rounded-full ml-3 py-1 px-2 bg-teal-400 text-white"
        data-action="completed"
      >
        Completed
      </button>
      <button
        className="rounded-full ml-3 py-1 px-2 bg-teal-400 text-white"
        data-action="pending"
      >
        Pending
      </button>
    </div>
  );
};

export default FilterTodos;
