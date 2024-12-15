import React from 'react';
import Card from './Card';

const ListSection = ({ heading, description, points, className }) => {
    return (
        <section className={className}>
            <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{heading}</h3>
            {description && <p className="text-center mb-4">{description}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {points.map((point, index) => (
                    <Card key={index} className="flex items-start">
                        <span className="accent-color mr-2 inline-block mt-1 min-w-[10px] flex-none">•</span>
                        <span className="flex-1" >{point}</span>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default ListSection;