import ReactDOM from "react-dom";
import React from 'react';

// Components
import { TodoContext } from "./TodoContext";

// Styles
import "../Styles/Modal.css";

function Modal ({ children }) {
    const {
        setModalActive,
        animationClass,
        setAnimationClass
    } = React.useContext(TodoContext)

    const OnAnimationEnd = (e) => {
        if(e.animationName === "ModalOut"){
            setModalActive(false)
        }
    }
    const OnOverlayClick= (e) => {
        if(e.target.className === "Modal-Overlay"){
            setAnimationClass('Out')
        }
    }

    return ReactDOM.createPortal(
        <div onClick={OnOverlayClick} className="Modal-Overlay">
            <div 
                onAnimationEnd={OnAnimationEnd} 
                className={"Modal-Content " + animationClass}
            >
                {children}
            </div>
        </div>,
        document.getElementById("modals")
    )
}

export { Modal }