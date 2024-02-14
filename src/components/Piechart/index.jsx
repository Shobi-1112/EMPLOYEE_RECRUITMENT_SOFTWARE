import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ chartData, type="doughnut" }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type:type,
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false
          },
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, [chartData]);

  return (
    <div style={{width:"10rem"}} className='maindiv'>
        <p className='percentage'>80%</p>
      <canvas ref={chartRef}/>
    </div>
  );
};

export default ChartComponent;
