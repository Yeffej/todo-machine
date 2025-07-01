import "../Styles/AddTodoButton.css";

import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { MdAdd } from "react-icons/md";


const AddTodoButton = () => {
  const { SetModalState, modalActive, animationClass } = useContext(TodoContext);

  const OnClick = () => {
    SetModalState(true);
  };

  const animation = animationClass === "In" ? "active" : "";
  return (
    <button
      title="Add Task"
      onClick={OnClick}
      className={`AddTodoButton ${modalActive && animation} `}
    >
      <MdAdd />
    </button>
  );
};

export { AddTodoButton };
