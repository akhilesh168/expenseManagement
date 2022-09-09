import React, { useEffect, useState } from 'react';
import ExpansesTable from './ExpansesTable';
import { getAllExpenses } from '../../api/api';
import { Box, CircularProgress } from '@mui/material';
export default function AllExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const { data } = await getAllExpenses();
      setExpenses((prevVal) => [...data.expenses]);
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ mt: 2, mb: 2 }}>
          <ExpansesTable expenses={expenses} />
        </Box>
      )}
    </>
  );
}
