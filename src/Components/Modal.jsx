import ReactDOM from "react-dom";
import React from 'react';

// Components
import { TodoContext } from "./TodoContext";

// Styles
import "../Styles/Modal.css";

function Modal ({ children }) {
    const {
        animationClass,
        SetModalState
    } = React.useContext(TodoContext)

    const OnAnimationEnd = (e) => {
        if(e.animationName === "ModalOut"){
            SetModalState(false, true)
        }
    }
    const OnOverlayClick= (e) => {
        if(e.target.className === "Modal-Overlay"){
            SetModalState(false)
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