import React from 'react';

const Card = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`skeuo-card ${className || ''} `}>
            {children}
        </div>
    );
};

export default Card;