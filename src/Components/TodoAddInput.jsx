import '../Styles/TodoAddInput.css';

const TodoAddInput = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="add-task">
        <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default TodoAddInput