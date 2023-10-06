import Chart from 'chart.js/auto';
import React, { useRef, useEffect } from 'react';

export default function StatisticsPieChart({allData}) {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current;

    let chartStatus = Chart.getChart('myChart');
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Users', 'Online Orders', 'Offline Orders', 'Dishes'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [...allData],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 245, 0.2)',
              'rgba(255, 246, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 246, 86, 1)',
              'rgba(75, 192, 230, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        //   title: {
        //     display: true,
        //     text: 'Number of animals in the zoo',
        //   },
        },
      },
    });
  }, [allData]);

  return (
    <div className='container'>
      <canvas id='myChart' ref={canvas}></canvas>
    </div>
  );
}