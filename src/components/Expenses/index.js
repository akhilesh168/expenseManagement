import React, { useState, useEffect, useMemo, memo } from 'react';
import { getExpensesById } from '../../api/api';
import {
  TableCell,
  DialogContent,
  DialogTitle,
  Dialog,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import ExpensesTable from './ExpensesTable';
import { toast } from 'react-toastify';
import { GenericErrorMessage, toastConfig } from '../../utils/constants';

function Expenses({ tripId, handleClose, open }) {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getExpensesById(tripId);
        setExpenses((prevVal) => [...data.expenses]);
        setIsLoading(false);
        return;
      } catch (err) {
        toast.error(err.message || GenericErrorMessage, toastConfig);
      }
    })();
  }, [tripId]);

  return (
    <>
      <Dialog fullWidth maxWidth={'md'} onClose={handleClose} open={open}>
        <DialogTitle>Expenses</DialogTitle>
        {isLoading ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <DialogContent>
            <ExpensesTable expenses={expenses} />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
export default memo(Expenses);
