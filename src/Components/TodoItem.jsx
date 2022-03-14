// Styles
import '../Styles/TodoItem.css';

const TodoItem = ({ 
    id,
    Text,
    Completed,
    onCompleted,
    onDeleted
})=> {
    
    return (
        <div className={`TodoItem ${Completed? "completed" : ""}`}>
            <i onClick={()=> onCompleted(id)} className="icon icon-complete">✔</i>
            <p className="TodoItem_description">{Text}</p>
            <i onClick={()=> onDeleted(id)} className="icon icon-delete">X</i>
        </div>
    )
}

export { TodoItem }