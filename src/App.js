import React, { useState } from 'react';
import {ChartCustomMenu} from './components/ChartCustomMenu';
import {ChartArea} from './components/ChartArea';
import {Table} from './components/Table';
import './App.css';

const App = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Клиент 1', value: 10 },
        { id: 2, name: 'Клиент 2', value: 85 },
        { id: 3, name: 'Клиент 3', value: 30 }
    ]);

    const [xAxis, setXAxis] = useState('');
    const [yAxis, setYAxis] = useState('');
    const [chartType, setChartType] = useState('line');
    const [colors, setColors] = useState('#007bff');

    const handleCustomizeChart = ({ xAxis, yAxis, chartType, colors }) => {
        setXAxis(xAxis);
        setYAxis(yAxis);
        setChartType(chartType);
        setColors(colors);
    };

    const option = {
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            data: data.map(item => item[xAxis])
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: chartType,
                data: data.map(item => item[yAxis])
            }
        ],
        color: [colors]
    };

    return (
        <div className="app">
            <ChartCustomMenu data={data} onCustomize={handleCustomizeChart} />
            <div className="main-content">
                <ChartArea option={option} />
                <Table data={data} />
            </div>
        </div>
    );
};

export default App;
