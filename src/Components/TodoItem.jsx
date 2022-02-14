// Styles
import '../Styles/TodoItem.css';

const TodoItem = ({ Text, Completed })=> {
    return (
        <div className={`TodoItem ${Completed? "completed" : ""}`}>
            <i className="icon icon-complete">✔</i>
            <p className="TodoItem_description">{Text}</p>
            <i className="icon icon-delete">X</i>
        </div>
    )
}

export { TodoItem }