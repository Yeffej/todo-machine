import React from 'react';

// Components
import { TodoContext } from "./TodoContext";

// Styles
import '../Styles/AddTodoButton.css';

const AddTodoButton = ()=> {
    const { 
        SetModalState,
        modalActive,
        animationClass
    } = React.useContext(TodoContext)

    const OnClick = (e)=>  {
        SetModalState(true)

        // Animate button element
        if(animationClass === 'Out') {
            e.target.classList.remove("animateX")
            e.target.classList.add("animatePlus")
        }else {
            e.target.classList.remove("animatePlus")
            e.target.classList.add("animateX")
        }
        
    }

    const AnimationButton = animationClass === 'In'
        ? "animateX"
        : "animatePlus"

    return (
        <button 
            onClick={OnClick} 
            className={`AddTodoButton ${modalActive && AnimationButton} `}
        >+</button>
    )
}

export { AddTodoButton }