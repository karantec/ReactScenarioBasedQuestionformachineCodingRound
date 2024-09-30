import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [12000, 15000, 18000, 20000, 25000, 30000],
        backgroundColor: 'rgba(59, 130, 246, 0.5)', // Tailwind Blue
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Bar Chart',
      },
    },
  };

//   1. Import React and necessary chart components from 'react-chartjs-2' and 'chart.js'.
//    - Import Bar (for bar chart) and required features like scales, title, tooltip, and legend.

// 2. Register chart components with ChartJS.register to use them in the bar chart.

// 3. Define a BarChart component.
//    - Inside the component:
   
// 4. Create a `data` object that includes:
//    - Labels for x-axis (e.g., months like January to June).
//    - A dataset array containing:
//      - A label for the data (e.g., 'Sales 2024').
//      - Data points for each month (e.g., sales numbers in USD).
//      - Bar styling options (background color and border color).
   
// 5. Create an `options` object to configure chart behavior:
//    - Make chart responsive.
//    - Set legend position (e.g., 'top').
//    - Add a title to the chart.

// 6. Return JSX to render the chart:
//    - Use a flexbox container that centers the chart on the page.
//    - Render a white box with shadow and padding to hold the chart.
//    - Use the Bar component to display the bar chart with `data` and `options`.

// 7. Export the BarChart component so it can be used in other parts of the application.


// How the Code Works

//     When the component is rendered, the Bar component receives the data and options.
//     Chart.js uses the registered components to construct a bar chart based on the provided data.
//     The chart is displayed inside a responsive, styled layout created using Tailwind CSS.
//     The chart updates dynamically if any data or configuration is changed.
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
