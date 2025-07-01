import { Link } from "wouter";
import { MdDeleteForever } from "react-icons/md";

export default function Task({ task, onDragStart, onDragEnd, onDelete, navigate }) {
  return (
    <>
      <div
        className="app-task"
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <a onClick={() => navigate(`/task/${task.id}`)}>{task.title}</a>
        <button
          className="delete-btn"
          onClick={onDelete}
          title="Delete"
        >
          <MdDeleteForever />
        </button>
      </div>
    </>
  );
}
