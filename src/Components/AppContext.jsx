import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("App");
  const [dragged, setDragged] = React.useState(null);
  const [newTask, setNewTask] = React.useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    saveTasks([
      ...tasks,
      { id: Date.now().toString(), title: newTask, list: "todo" },
    ]);
    setNewTask("");
  };

  const editTask = (id, title) => {
    saveTasks(tasks.map((t) => (t.id === id ? { ...t, title } : t)));
  };

  const deleteTask = (id) => {
    saveTasks(tasks.filter((t) => t.id !== id));
  };

  const moveTask = (id, list) => {
    saveTasks(tasks.map((t) => (t.id === id ? { ...t, list } : t)));
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        setDragged,
        dragged,
        newTask,
        setNewTask,
        addTask,
        editTask,
        deleteTask,
        moveTask,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
