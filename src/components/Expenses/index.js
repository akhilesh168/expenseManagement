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
  let groupedResult = useMemo(() => {
    if (expenses.length > 0) {
      return groupBy(expenses, 'category');
    }
  }, [expenses]);
  console.log(groupedResult);
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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Expenses Category</TableHeaderCell>
                    <TableHeaderCell>Expenses Description</TableHeaderCell>
                    <TableHeaderCell>Expenses Date</TableHeaderCell>
                    <TableHeaderCell>Expenses Amount</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expenses.map((expense) => (
                    <TableRow
                      key={`${expense.trip} ${expense.description} ${expense.date}`}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {expense.category.value || expense.category}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {expense.description}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {expense.date}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {expense.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {expenses.length > 0 ? (
              <ExpensePieChart expenses={groupedResult} />
            ) : null}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
export default memo(Expenses);
