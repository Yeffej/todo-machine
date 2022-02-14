// Styles
import '../Styles/TodoList.css';

const TodoList = ({ children }) => {
    return (
        <div className="TodoList">
            {children}
        </div>
    )
}

export { TodoList }