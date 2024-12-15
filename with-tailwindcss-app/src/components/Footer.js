import React from 'react';

const Footer = ({ copyright }) => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <p>{copyright}</p>
        </footer>
    )
}

export default Footer;