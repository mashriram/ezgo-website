import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Hero = ({ heading, description, buttonText, logo }) => {
    return (
        <header className="bg-gradient-to-r from-blue-400 to-blue-600 py-20 text-white text-center relative">
            <div className="absolute inset-0 opacity-30">
                <Image
                    src={logo}
                    alt="ezgo-product"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    quality={95}
                />
            </div>
            <div className="z-10 relative">
                <h2 className="text-4xl font-bold mb-4">{heading}</h2>
                <p className="text-lg mb-8">{description}</p>
                <Button>{buttonText}</Button>
            </div>
        </header>
    );
};

export default Hero;