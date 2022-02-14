// React
import React from "react";

// Components
import { TodoTitle } from "./Components/TodoTitle";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { AddTodoButton } from "./Components/AddTodoButton";

// Styles
import './Styles/App.css';

function App() {
  const todoList = [
    {"id": 1, "text": "Cortar Cebolla", "completed": false},
    {"id": 2, "text": "Comprar Proteinas", "completed": false},
    {"id": 3, "text": "Crear main Page", "completed": true},
    {"id": 4, "text": "Hacer la cena", "completed": false},
  ]

  return (
    <React.Fragment>
      <TodoTitle/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todoList.map(todo =>
          <TodoItem key={todo.id} Text={todo.text} Completed={todo.completed} />
        )}
      </TodoList>
      <AddTodoButton/>
    </React.Fragment>
  );
}

export default App;
