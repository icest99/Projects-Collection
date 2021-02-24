import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const stored_todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); // we need to turn it from string to array, so use JSON parse.
    if (stored_todos) {
      setTodos(stored_todos);
    }
  }, []); // this second arugment the dependency, this empty array will run only once when we first load the page(i think)

  useEffect(() => {
    // useEffect is for when we want to make state sticky, so the value wont disappear when we press Refresh. and it should be the first function to be called. (1) this first one is for storage, we need another UseEffect to load it on our page!
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)); // JSON turn the value into string
  }, [todos]); // this second argument determine that useEffect will run everytime something inside todos changed

  function toggleTodo(id) {
    const newTodos = [...todos]; // we make a copy of todos instead of modifying it firectly
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddToDo(button_event) {
    const name = todoNameRef.current.value; // this is whatever value that are in the text input right now, and will be sent to us when they press the button
    if (name === "") {
      return "";
    }

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodo() {
    //clear completed todos
    const currentTodo = todos.filter((todo) => !todo.complete); //!todo.complete is todo that has complete value of false
    setTodos(currentTodo[0]);
  }

  return (
    <>
      <TodoList todos_state={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add Task</button>
      <button onClick={handleClearTodo}>Clear Completed Task</button>
      <div>
        {todos.filter((each) => each.complete !== true).length} left to do
      </div>
    </> // this </> is called fragment
  );
}

export default App;
