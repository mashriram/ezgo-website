import React from 'react';
import { useTheme } from '../context/ThemeContext';


const Table = ({ headers, rows }) => {
    const { theme } = useTheme()
    return (
        <div className="overflow-x-auto">
            <table className={`skeuo-table ${theme === 'dark' ? 'dark' : ''} `}>
                <thead>
                    <tr >
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="p-3 border">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;