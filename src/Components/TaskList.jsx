export default function List({ title, onDrop, color, children }) {
  const styles = {
    '--listColor': color || ''
  };

  return (
    <div className="app-list" onDragOver={e => e.preventDefault()} onDrop={onDrop}>
      <h2>{title}</h2>
      <div className="app-tasks" style={styles}>{children}</div>
    </div>
  );
}
