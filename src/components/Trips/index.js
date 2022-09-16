import React, { memo, useEffect, useState } from 'react';
import { getAllTrips, saveExpense, saveTrip } from '../../api/api';
import AddTripForm from './AddTripForm';
import {
  Button,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Box,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import MuiTableHead from '@mui/material/TableHead';
import { withStyles } from '@mui/styles';
import AddExpensesForm from '../Expenses/AddExpensesForm';
import Expenses from '../Expenses';
import { toast } from 'react-toastify';
import { GenericErrorMessage, toastConfig } from '../../utils/constants';

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

function Trip() {
  const [openTrip, setOpenTrip] = useState(false);
  const [status, setStatus] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState('');
  const [openExpenses, setOpenExpenses] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => {
    setOpenTrip(false);
    setSelectedTrip('');
  };
  const handleShowExpensesClose = () => {
    setShowExpenses(false);
    setSelectedTrip('');
  };
  const handleOpen = () => {
    setOpenTrip(true);
  };
  const handleTripSubmit = async (data) => {
    setOpenTrip(false);
    const { ok } = await saveTrip(data);
    setStatus(!ok);
    setSelectedTrip('');
  };
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getAllTrips();
        setTrips((prevVal) => [...data.trips]);
        setIsLoading(false);
      } catch (err) {
        toast.error(err.message || GenericErrorMessage, toastConfig);
      }
    })();
  }, [status]);

  const handleExpensesClose = () => {
    setOpenExpenses(false);
    setSelectedTrip('');
  };
  const handleExpensesOpen = (tripId) => {
    setOpenExpenses(true);
    setSelectedTrip(tripId);
  };
  const handleShowExpensesOpen = (tripId) => {
    setShowExpenses(true);
    setSelectedTrip(tripId);
  };

  const handleExpensesSubmit = async (data) => {
    setOpenExpenses(false);
    const { response } = await saveExpense(data);
    if (response.status !== 200) {
      toast.error(
        response.data.err.message || GenericErrorMessage,
        toastConfig
      );
    }
    console.log('da', response.status);
    setSelectedTrip('');
  };
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
        <>
          {' '}
          <Box sx={{ mt: 3, mb: 3 }}>
            <Button variant="contained" onClick={handleOpen}>
              Add Trip
            </Button>
            <AddTripForm
              handleTripSubmit={handleTripSubmit}
              handleOpen={handleOpen}
              handleClose={handleClose}
              openTrip={openTrip}
            />
          </Box>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead style={{ background: '#26ADE0' }}>
                <TableRow>
                  <TableHeaderCell>Trip Name</TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trips.map((trip) => (
                  <TableRow
                    key={trip.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {trip.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Button
                          variant="contained"
                          onClick={() => handleExpensesOpen(trip._id)}
                        >
                          Add Expenses
                        </Button>
                        {openExpenses && selectedTrip === trip._id ? (
                          <AddExpensesForm
                            handleClose={handleExpensesClose}
                            openExpenses={openExpenses}
                            handleExpensesSubmit={handleExpensesSubmit}
                            expense={trip._id}
                          />
                        ) : null}
                      </Box>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Box sx={{ mt: 3, mb: 3 }}>
                        <Button
                          variant="contained"
                          onClick={() => handleShowExpensesOpen(trip._id)}
                        >
                          Show Expenses
                        </Button>
                        {showExpenses && selectedTrip === trip._id ? (
                          <Expenses
                            handleClose={handleShowExpensesClose}
                            open={showExpenses}
                            tripId={trip._id}
                          />
                        ) : null}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
export default memo(Trip);
