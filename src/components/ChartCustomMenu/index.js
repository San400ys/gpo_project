import React, { useState } from 'react';
import { ColorPicker } from 'antd';
import './styles.css';

export const ChartCustomMenu = ({ data, onCustomize }) => {
    const [xAxis, setXAxis] = useState('');
    const [yAxis, setYAxis] = useState('');
    const [chartType, setChartType] = useState('line');
    const [colors, setColors] = useState('#1677ff');

    const handleCustomize = () => {
        onCustomize({ xAxis, yAxis, chartType, colors });
    };

    return (
        <div className="sidebar">
            <div className="chart-custom-menu">
                <label>Select X:
                    <select value={xAxis} onChange={({ target }) => setXAxis(target.value)}>
                        {Object.keys(data[0]).map(key => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                </label>

                <label>Select Y:
                    <select value={yAxis} onChange={({ target }) => setYAxis(target.value)}>
                        {Object.keys(data[0]).map(key => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                </label>

                <label>Chart Type:
                    <select value={chartType} onChange={({ target }) => setChartType(target.value)}>
                        <option value="line">Line</option>
                        <option value="bar">Bar</option>
                    </select>
                </label>

                <label>Color:
                    <ColorPicker
                        color={colors}
                        onChange={color => setColors(color.toHexString())}
                    />
                </label>

                <button onClick={handleCustomize}>Apply</button>
            </div>
        </div>
    );
};
