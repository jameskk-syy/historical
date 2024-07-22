"use client";
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function BarCharts() {
  const chartRef = useRef(null);


  const dataSets = {
    production: {
      bar: {
        label: "Production",
        data: [300, 600, 150, 200, 450, 800, 1500, 378, 670, 560, 345, 700],
        backgroundColor: "#e2f397",
        // borderColor: "green",
        borderWidth: 1,
      }
    },
    sales: {
      bar: {
        label: "Sales",
        data: [400, 500, 200, 300, 600, 900, 1400, 478, 780, 660, 445, 800],
        backgroundColor: "#5aba8a",
        // borderColor: "#004953",
        borderWidth: 1,
      }
    },
    loans: {
      bar: {
        label: "Loans",
        data: [200, 400, 100, 150, 350, 700, 1300, 278, 580, 460, 245, 600],
        backgroundColor: "#01565b",
        // borderColor: "blue",
        borderWidth: 1,
      }
    },
    savings: {
      bar: {
        label: "Savings",
        data: [500, 700, 300, 400, 750, 1000, 1600, 578, 880, 760, 545, 900],
        backgroundColor: "#d6daed",
        // borderColor: "purple",
        borderWidth: 1,
      }
    }
  };

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
          labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: Object.values(dataSets).map(dataset => dataset.bar)
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
              beginAtZero: true,
            }
          },
          plugins: {
            legend: {
              display: true
            },
            title: {
              display: false
            },
            tooltip: {
              enabled: true
            }
          },
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
    <div style={{ height: '300px' }}>
      <canvas ref={chartRef} />
    </div>
  );
}

// To use the BarCharts component in your specified div:
export function App() {
  return (
    <div className='flex flex-col shadow rounded-md m-4 p-4 bg-white md:w-1/2'>
      <BarCharts />
    </div>
  );
}
