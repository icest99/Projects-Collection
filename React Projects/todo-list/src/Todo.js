import React from "react";

export default function todos({ todos_fromTodoList, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todos_fromTodoList.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todos_fromTodoList.complete}
          onChange={handleTodoClick}
        ></input>
        {todos_fromTodoList.name}
      </label>
    </div>
  );
}
