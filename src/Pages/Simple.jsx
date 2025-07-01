// Libs
import { useContext } from "react";

// Components
import { TodoTitle } from "../Components/TodoTitle";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { AddTodoButton } from "../Components/AddTodoButton";
import { TodoContext } from "../Components/TodoContext";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import { TodoLoader } from "../Components/Loaders";

// Styles
import "../Styles/App.css";
import TransitionToPage from "../Components/TransitionToPage";
import { useTransitionNavigation } from "../Hooks/useTransitionNavigation";
import HomeHeader from "../Components/HomeHeader";

const Simple = () => {
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
  } = useContext(TodoContext);

  // NAVIGATION
  const [onTransition, setTransitionFinish, navigate] = useTransitionNavigation();

  return (
    <>
      <TransitionToPage veil={onTransition} setFinish={setTransitionFinish} />
      <HomeHeader navigate={navigate} />
      <div className="app-container">
        <TodoTitle />
        <TodoCounter completedCount={todosCompleted} totalTodos={todoCount} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {loading && <TodoLoader />}
          {error && (
            <p>
              Ha ocurrido un error al cargar los todos. Recargue la pagina o
              reporte este error.
            </p>
          )}

          {!loading &&
            !error &&
            searchTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                Text={todo.text}
                Completed={todo.completed}
                onCompleted={onCompleted}
                onDeleted={onDeleted}
              />
            ))}
        </TodoList>
        <AddTodoButton />
        {modalActive && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Simple;