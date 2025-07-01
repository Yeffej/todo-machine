import "../../Styles/App.css";

import { useAppContext } from "../../Components/AppContext";
import { TodoTitle } from "../../Components/TodoTitle";
import TodoAddInput from "../../Components/TodoAddInput";
import Board from "../../Components/Board";
import List from "../../Components/TaskList";
import Task from "../../Components/Task";
import { TaskLoader } from "../../Components/Loaders";
import { defaultLists } from "../../constants";
import TransitionToPage from "../../Components/TransitionToPage";
import HomeHeader from "../../Components/HomeHeader";
import { useTransitionNavigation } from "../../Hooks/useTransitionNavigation";

export default function App() {
  const {
    tasks,
    setDragged,
    dragged,
    newTask,
    setNewTask,
    addTask,
    deleteTask,
    moveTask,
    loading,
  } = useAppContext();

  // NAVIGATION
  const [onTransition, setTransitionFinish, navigate] = useTransitionNavigation();

  return (
    <>
      <TransitionToPage veil={onTransition} setFinish={setTransitionFinish} />
      <HomeHeader navigate={navigate} />
      <div className="app-container">
        <TodoTitle />
        {/* <TodoCounter completedCount={todosCompleted} totalTodos={todoCount} /> */}
        <TodoAddInput addTask={addTask} setNewTask={setNewTask} newTask={newTask} />
        <Board>
          {defaultLists.map((list) => (
            loading
              ? <TaskLoader key={list.id} />
              : <List
                key={list.id}
                title={list.title}
                color={list.color}
                onDrop={() => dragged && moveTask(dragged, list.id)}
              >
                {tasks
                  .filter((t) => t.list === list.id)
                  .map((task) => (
                    <Task
                      key={task.id}
                      task={task}
                      onDragStart={() => setDragged(task.id)}
                      onDragEnd={() => setDragged(null)}
                      onDelete={() => deleteTask(task.id)}
                      navigate={navigate}
                    />
                  ))}
              </List>
          ))}
        </Board>
      </div>
    </>
  );
}

