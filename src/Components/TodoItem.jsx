// Styles
import '../Styles/TodoItem.css';

import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const TodoItem = ({ 
    id,
    Text,
    Completed,
    onCompleted,
    onDeleted
})=> {

    const handleDelete = () => {
        if(confirm(`Deseas eliminar el todo: "${Text}"?`)) {
            onDeleted(id)
        }
    }
    
    return (
        <div className={`TodoItem ${Completed? "completed" : ""}`}>
            <i onClick={()=> onCompleted(id)} className="icon icon-complete"><FaCheck/></i>
            <p className="TodoItem_description">{Text}</p>
            <i onClick={handleDelete} className="icon icon-delete"><MdDeleteForever /></i>
        </div>
    )
}

export { TodoItem }