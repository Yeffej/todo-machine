import '../../Styles/TaskEdit.css';

import { useState, useEffect } from 'react';
import { useAppContext } from '../../Components/AppContext';
import { SpinningLoader } from '../../Components/Loaders';
import { useTransitionNavigation } from '../../Hooks/useTransitionNavigation';
import TransitionToPage from '../../Components/TransitionToPage';

const TaskEdit = ({ params }) => {
  const { tasks, editTask, loading } = useAppContext();

  const [title, setTitle] = useState("");
  const [task, setTask] = useState();

  useEffect(() => {
    setTask(tasks.find((t) => t.id === params.id));
  }, [tasks, params.id]);

  useEffect(() => {
    if (task) setTitle(task.title);
  }, [task]);

  const save = () => {
    editTask(task.id, title);
    navigate("/app");
  };

  const [onTransition, setTransitionFinish, navigate] = useTransitionNavigation();

  return (
    <>
      <TransitionToPage veil={onTransition} setFinish={setTransitionFinish} />
      {loading && <SpinningLoader time={0.5} />}
      {!loading && !task && <div className="not-found">Task not found.</div>}
      {!loading && task && (
        <div className="TaskEdit">
          <h2>Edit Task</h2>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && save()}
          />
          <div>
            <button onClick={save}>Save</button>
            <button onClick={() => navigate("/app")} className="cancel">Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskEdit;