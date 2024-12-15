import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button className="skeuo-button" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;