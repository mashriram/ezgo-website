import React from 'react';
import Card from './Card';
import { useTheme } from '../context/ThemeContext';

const SwocAnalysis = ({ heading, strengths, weaknesses, opportunities, challenges, backgroundImage }) => {
    const { theme } = useTheme()
    return (
        <section className="mb-12" id="swoc" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{heading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-700">Strengths</h4>
                    <ul>
                        {strengths.map((strength, index) => (
                            <li key={index} className="ml-6 mb-2 text-gray-800">
                                <span className="accent-color mr-2 inline-block">•</span>
                                <span >{strength}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-700">Weaknesses</h4>
                    <ul>
                        {weaknesses.map((weakness, index) => (
                            <li key={index} className="ml-6 mb-2 text-gray-800">
                                <span className="accent-color mr-2 inline-block">•</span>
                                <span >{weakness}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-700">Opportunities</h4>
                    <ul>
                        {opportunities.map((opportunity, index) => (
                            <li key={index} className="ml-6 mb-2 text-gray-800">
                                <span className="accent-color mr-2 inline-block">•</span>
                                <span >{opportunity}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
                <Card>
                    <h4 className="text-2xl font-semibold mb-4 text-gray-700">Challenges</h4>
                    <ul>
                        {challenges.map((challenge, index) => (
                            <li key={index} className="ml-6 mb-2 text-gray-800">
                                <span className="accent-color mr-2 inline-block">•</span>
                                <span >{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </section>
    )
}

export default SwocAnalysis;