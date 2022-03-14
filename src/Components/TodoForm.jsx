import React from 'react';
// Components 
import { TodoContext } from './TodoContext';
// Styles
import "../Styles/TodoForm.css";

function TodoForm() {
    const [newTodoText, setNewTodoText] = React.useState('')
    const { CreateTodo, SetModalState } = React.useContext(TodoContext)

    const HandleSumbit = (e) => {
        // prevent the default behaviour.
        e.preventDefault()
        // Create new form.
        if(newTodoText.length > 0) {
            CreateTodo(newTodoText)
        }else {
            alert("Alerta: No puedes crear un texto vacío.")
        }
    }

    const OnCancel = () => {
        SetModalState(false)
    }

    const onTextTodoInput = (e) => setNewTodoText(e.target.value)

    return (
        <form onSubmit={HandleSumbit} className="TodoForm">
            <label htmlFor="newTodo">Escribe un nuevo Todo:</label>
            <textarea 
                name="newTodo" 
                id="newTodo" 
                cols="30" 
                rows="10"
                placeholder="Comprar la cena"
                value={newTodoText}
                onInput={onTextTodoInput}
            >    
            </textarea>
            <div className="TodoForm_btnWrapper">
                <button 
                    onClick={OnCancel} 
                    type="button" 
                    className="btn cancel"
                >Cancelar</button>
                <button type="Submit" className="btn create">Crear Todo</button>
            </div>
        </form>
    )
}

export { TodoForm }