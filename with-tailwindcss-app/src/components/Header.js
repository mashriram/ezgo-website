import Image from 'next/image';
import React from 'react';

const Header = ({ appName, navLinks, logo }) => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex items-center primary-bg">
            <Image src={logo} alt={appName + "logo"} width={60} height={60} />
            <h1 className="text-2xl font-bold ml-2">{appName}</h1>
            <div className="ml-auto">
                {navLinks.map((link, index) => (
                    <a href={link.href} className="ml-4 hover:underline" key={index}>
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Header;