import React from 'react';

// Components
import { TodoContext } from "./TodoContext";

// Styles
import '../Styles/AddTodoButton.css';

const AddTodoButton = ()=> {
    const { 
        setModalActive,
        modalActive,
        setAnimationClass, 
        animationClass
    } = React.useContext(TodoContext)

    const OnClick = (e)=>  {
        setModalActive(true)
        setAnimationClass(animationClass === 'In'? "Out" : "In" )

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