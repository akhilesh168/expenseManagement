import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ExpensePieChart({ expenses }) {
  const data = {
    labels: expenses.map((item) => item.category.value || item.category),
    datasets: [
      {
        label: '# of Votes',
        data: expenses.map((item) => item.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box
      sx={{
        mt: 2,
        pt: 2,
        height: '400px',
        width: '500px',
        border: '2px black solid',
      }}
    >
      <Pie data={data} options={{ maintainAspectRatio: false }} />
    </Box>
  );
}
