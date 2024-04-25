import React from 'react';
import ReactECharts from 'echarts-for-react';
import './styles.css';

export const ChartArea = ({ option }) => {
    return (
        <div className="chart-area">
            <ReactECharts option={option} style={{ height: '400px' }} />
        </div>
    );
};
