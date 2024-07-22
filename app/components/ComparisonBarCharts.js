"use client"
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function ComparisonBarCharts() {
  const chartRef = useRef(null);

  useEffect(() => {
    let newChart;

    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      
      const context = chartRef.current.getContext("2d");

      newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["Yield 1", "Yield 2", "Yield 3", ],
          datasets: [
            {
              label: "Actual",
              data: [300, 600, 150, 200],
              backgroundColor: "#01565b",
              borderColor: "blue",
              borderRadius: 10
            },
            {
              label: "Expected",
              data: [250, 550, 200, 180],
              backgroundColor: "#e2f397",
              borderColor: "red",
              borderRadius: 10
            }
          ]
        },
        options: {
          responsive: true, 
          maintainAspectRatio: false, 
          scales: {
            x: {
              type: "category"
            },
            y: {
              beginAtZero: true
            }
          },
          barThickness: 10
          
        }
      });

      chartRef.current.chart = newChart;
    }

    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
