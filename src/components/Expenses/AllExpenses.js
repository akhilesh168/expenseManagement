import React, { useEffect, useState } from 'react';
import ExpensesTable from './ExpensesTable';
import { getAllExpenses } from '../../api/api';
import { Box, CircularProgress, Backdrop } from '@mui/material';
import { toast } from 'react-toastify';
import { GenericErrorMessage, toastConfig } from '../../utils/constants';

export default function AllExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const { data } = await getAllExpenses();
        setExpenses((prevVal) => [...data.expenses]);
        setIsLoading(false);
      })();
    } catch (err) {
      toast.error(err.message || GenericErrorMessage, toastConfig);
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Box sx={{ mt: 2, mb: 2 }}>
          <ExpensesTable expenses={expenses} />
        </Box>
      )}
    </>
  );
}
