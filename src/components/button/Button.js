import React from 'react';

const Button = ({ handleShow, children }) => {
    return (
        <button onClick={handleShow}>
            {children}
        </button>
    );
};

export default Button;
