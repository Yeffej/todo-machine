import React from 'react';
// Hooks
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { useFilterBySearch } from "../Hooks/useFilterBySearch";


const TodoContext = React.createContext()

function TodoProvider ({ children }) {
    // declaring Hooks
    const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
    } = useLocalStorage("TODOS_V1")

    const { 
        searchValue, 
        setSearchValue,
        searchItems: searchTodos
    } = useFilterBySearch(todos, '')

    // Calculate and process data
    const todosCompleted = todos.filter(todo => !!todo.completed).length
    const todoCount = todos.length

    const onCompleted = (todoID) => {
        const todo = todos.find(todo => todo.id === todoID)
        todo.completed = !todo.completed
        const newTodos = [...todos]
        saveTodos(newTodos)
    }

    const onDeleted = (todoID) => {
        const newTodos = todos.filter(todo => todo.id !== todoID)
        saveTodos(newTodos)
    }

    const [modalActive, setModalActive] = React.useState(false)
    const [animationClass, setAnimationClass] = React.useState('')

    const SetModalState = (state = modalActive, animationOutEnd = false) => {
        if (state) {
            setModalActive(true)
        }
        
        if(!animationOutEnd) {
            setAnimationClass(animationClass === 'In'? "Out" : "In" )

        }else {
            setModalActive(false)
        }
    }

    const CreateTodo = (todoText) => {
        // create new todo
        const lastTodoID = todos.length > 0? todos[todos.length - 1].id: 0
        const newTodo = {
            id: lastTodoID + 1,
            text: todoText,
            completed: false
        }
        
        // Save new todos
        saveTodos([...todos, newTodo])
        // Close modal.
        SetModalState(false)
    }

    const GlobalProps = {
        todoCount,
        searchValue,
        setSearchValue,
        todosCompleted,
        searchTodos,
        onCompleted,
        onDeleted,
        CreateTodo,
        loading,
        error,
        modalActive,
        SetModalState,
        animationClass,
    }

    return (
        <TodoContext.Provider value={GlobalProps}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }