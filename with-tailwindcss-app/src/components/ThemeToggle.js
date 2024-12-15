import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}
            className={`rounded-full focus:outline-none px-4 py-2 ${theme === 'light' ? 'bg-gray-300 text-gray-700' : 'bg-gray-700 text-white'}`}>
            {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
};

export default ThemeToggle;