// React
import React from "react";

// Components
import { TodoTitle } from "./TodoTitle";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { AddTodoButton } from "./AddTodoButton";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import  {TodoLoader} from "./TodoLoader";

// Styles
import '../Styles/App.css';

function AppUI() {
    const {
      loading,
      error,
      todoCount,
      searchValue,
      setSearchValue,
      todosCompleted,
      searchTodos,
      onCompleted,
      onDeleted,
      modalActive,
  } = React.useContext(TodoContext)

    
    return(
        <React.Fragment>
      <TodoTitle />
      <TodoCounter completedCount={todosCompleted} totalTodos={todoCount}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {loading && <TodoLoader/>}
        {error && <p>Ha ocurrido un error al cargar los todos. 
            Recargue la pagina o reporte este error.</p>}

        {!loading && !error && searchTodos.map(todo =>
          <TodoItem 
            key={todo.id}
            id={todo.id}
            Text={todo.text}
            Completed={todo.completed}
            onCompleted={onCompleted}
            onDeleted={onDeleted}
          />
        )}
      </TodoList>
      <AddTodoButton/>

      {modalActive &&
        <Modal>
          <TodoForm/>
        </Modal>
      }
    </React.Fragment>        
    )
}

export {AppUI}