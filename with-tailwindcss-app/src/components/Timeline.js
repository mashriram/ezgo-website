import React from 'react';

const Timeline = ({ heading, points }) => {
    return (
        <section className="mb-12" id="timeline">
            <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{heading}</h3>
            <div className="relative">
                <div className="absolute left-1/2 h-full border-r-2 border-gray-300 top-4"></div>
                {points.map((point, index) => (
                    <div key={index} className={`flex flex-row ${index % 2 === 0 ? "justify-end pr-8 text-right" : "justify-start pl-8 text-left"} my-6`}>
                        <div className="relative bg-white  rounded-md shadow-md p-4 w-5/12 ">
                            <div className={`absolute w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-200 top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'left-full ml-4' : 'right-full mr-4'}`} ></div>
                            <h4 className="font-semibold text-gray-700 whitespace-normal" >{point}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Timeline;