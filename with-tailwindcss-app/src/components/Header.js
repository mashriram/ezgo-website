import Image from 'next/image';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Header = ({ appName, navLinks, logo }) => {
    const { theme } = useTheme()
    return (
        <nav className={`p-4 text-white flex items-center  ${theme === 'light' ? 'bg-blue-500 primary-bg' : 'bg-gray-800'} `}>
            <Image src={logo} alt={appName + "logo"} width={60} height={60} />
            <h1 className="text-2xl font-bold ml-2">{appName}</h1>
            <div className="ml-auto flex items-center">
                {navLinks.map((link, index) => (
                    <a href={link.href} className="ml-4 hover:underline" key={index}>
                        {link.text}
                    </a>
                ))}
                {/* <ThemeToggle /> */}
            </div>
        </nav>
    );
};

export default Header;