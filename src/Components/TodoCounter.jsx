// Styles
import '../Styles/TodoCounter.css';

const TodoCounter = ({completedCount, totalTodos})=> {
    return (
        <h3 className="TodoCounter">Has completado {completedCount} de {totalTodos}</h3>
    )
}

export { TodoCounter }