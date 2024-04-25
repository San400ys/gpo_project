import React from 'react';
import './styles.css';

export const Table = ({ data }) => {
    return (
        <div className="table">
            <table>
                <thead>
                <tr>
                    {Object.keys(data[0]).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, id) => (
                            <td key={id}>{value}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
