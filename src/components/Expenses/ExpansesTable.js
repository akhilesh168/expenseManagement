import React, { useMemo } from 'react';
import {
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Paper,
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

export default function ExpansesTable({ expenses }) {
  let groupedResult = useMemo(() => {
    if (expenses.length > 0) {
      return groupBy(expenses, 'category');
    }
  }, [expenses]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="a dense table">
          <TableHead style={{ background: '#26ADE0' }}>
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
    </>
  );
}
