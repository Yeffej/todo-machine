// Styles
import "../Styles/TodoForm.css";

function TodoForm() {
    return (
        <form className="TodoForm">
            <label htmlFor="newTodo">Escribe un nuevo Todo:</label>
            <textarea 
                name="newTodo" 
                id="newTodo" 
                cols="30" 
                rows="10"
                placeholder="Comprar la cena"
            >    
            </textarea>
            <div>
                <button type="button">Cancelar</button>
                <button type="Submit">Crear Todo</button>
            </div>
        </form>
    )
}

export { TodoForm }