import React from 'react';

const Table = ({ headers, rows }) => {
    return (
        <div className="overflow-x-auto">
            <table className="skeuo-table">
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