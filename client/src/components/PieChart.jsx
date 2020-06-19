import React from "react";
import Chart from "react-google-charts";

const PieChart = ({ chartData }) => {
  return (
    <div className = 'component'>
      <h2>TOP EXPENSES</h2>
      <Chart
        width={'380px'}
        height={'230px'}
        chartType="PieChart"
        loader={<div style={{paddingLeft: '15px'}}>Loading...</div>}
        data={ chartData }
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default PieChart;

