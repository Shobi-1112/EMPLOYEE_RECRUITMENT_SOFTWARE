import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ chartData, type = "doughnut", className }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, {
      type: type,
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [chartData]);

  return (
    <div  className={"maindiv " + className}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
