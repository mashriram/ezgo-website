import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Card = ({ children, className, ...props }) => {
    const { theme } = useTheme();
    return (
        <div {...props} className={`skeuo-card ${className || ''} ${theme === 'dark' ? 'dark' : ''} ${theme === 'light' ? 'bg-white' : ''}`}>
            {children}
        </div>
    );
};

export default Card;