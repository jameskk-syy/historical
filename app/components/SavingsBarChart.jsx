"use client"
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function SavingsBarCharts() {
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
          labels: ["JAN", "FEB", "MAR", "APR", "JUN", "JUL", "AUG" ,"SEP" , "OCT" ,"NOV","DEC"],
          datasets: [
            {
              label: "Savings statistics",
              data: [300, 600, 150, 200, 450, 800, 1500 ,378, 670, 560 ,345,700],
              backgroundColor: "#01565b",
              borderColor: "blue",
              borderRadius: {
                topLeft: 10, 
                topRight: 10, 
                bottomLeft: 10,
                bottomRight: 10 
              }
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
          barThickness: 20
          
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
