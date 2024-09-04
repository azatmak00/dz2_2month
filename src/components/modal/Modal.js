import React from 'react'
import classes from "./Modal.module.css";

const Modal = ({handleShow, children}) => {
    return (
        <div>

            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>Close</button>
                -------------------------------------
                {children}
                -------------------------------------
            </div>


        </div>
    );
};

export default Modal;