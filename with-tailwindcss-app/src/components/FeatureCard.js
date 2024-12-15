import React from 'react';
import Card from './Card';
import Image from 'next/image';

const FeatureCard = ({ title, description, icon }) => {
    return (
        <Card className="text-gray-700 flex flex-col justify-center items-center py-6 px-4">
            {icon && <Image src={icon} alt={title + ' icon'} width={60} height={60} className="mx-auto mb-4" />}
            <h4 className="text-xl font-semibold mb-2 text-center secondary-color">{title}</h4>
            <p className="text-center">{description}</p>
        </Card>
    )
}

export default FeatureCard;