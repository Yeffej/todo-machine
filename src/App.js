// React
import React from "react";

// Components
import { TodoTitle } from "./Components/TodoTitle";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";

// Styles
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <TodoTitle/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
      </TodoList>
    </React.Fragment>
  );
}

export default App;
