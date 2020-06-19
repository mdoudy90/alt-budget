import React from "react";
import Chart from "react-google-charts";

const PieChart = ({ chartData }) => {
  return (
    <Chart
      width={'700px'}
      height={'500px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={ chartData }
      options={{
        title: 'Top Spending Categories',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default PieChart;

