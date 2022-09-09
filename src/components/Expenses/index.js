import React, { useState, useEffect, useMemo, memo } from 'react';
import { getExpensesById } from '../../api/api';
import {
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Box,
  DialogContent,
  DialogTitle,
  Dialog,
  CircularProgress,
} from '@mui/material';
import MuiTableHead from '@mui/material/TableHead';
import { withStyles } from '@mui/styles';
import { ExpensePieChart } from './ExpensesPieChart';
import { groupBy } from '../../utils/helper';
import ExpansesTable from './ExpansesTable';

const TableHead = withStyles((theme) => ({
  root: {
    backgroundColor: 'orange',
  },
}))(MuiTableHead);

const TableHeaderCell = withStyles((theme) => ({
  root: {
    color: 'white',
  },
}))(TableCell);

function Expenses({ tripId, handleClose, open }) {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await getExpensesById(tripId);
      setExpenses((prevVal) => [...data.expenses]);
      setIsLoading(false);
      return;
    })();
    /* else {
      (async () => {
        const { data } = await getAllExpenses();
        setExpenses((prevVal) => [...data.expenses]);
      })();
    } */
  }, [tripId]);

  return (
    <>
      <Dialog fullWidth maxWidth={'md'} onClose={handleClose} open={open}>
        <DialogTitle>Expenses</DialogTitle>
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <DialogContent>
            <ExpansesTable expenses={expenses} />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
export default memo(Expenses);
