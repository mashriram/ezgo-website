import React from 'react';
import Card from './Card';
import Button from './Button';

const PricingCard = ({ title, price, features, buttonText }) => {
    return (
        <Card className="flex-1 min-w-[250px] text-gray-700">
            <h4 className="text-xl font-semibold mb-2 text-center secondary-color">{title}</h4>
            <div className="text-center">
                <span className="text-3xl font-bold accent-color">{price}</span>
                <p className="text-gray-500 text-xs">Per Device</p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
                {features.map((feature, index) => (
                    <li key={index}>✅ {feature}</li>
                ))}
            </ul>
            <div className="mt-4 text-center">
                <Button>{buttonText}</Button>
            </div>
        </Card>
    );
};

export default PricingCard;