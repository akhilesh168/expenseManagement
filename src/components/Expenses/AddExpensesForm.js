import React, { memo } from 'react';
import {
  Box,
  Container,
  Button,
  DialogContent,
  Dialog,
  DialogTitle,
  TextField,
  FormLabel,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { category } from '../../utils/constants';
import Select from 'react-select';

function AddExpensesForm({
  handleExpensesSubmit,
  handleClose,
  openExpenses,
  expense,
}) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      trip: expense || '',
      amount: 0,
      category: category.TRAVEL,
      description: '',
      date: new Date().toISOString(),
    },
  });

  const onSubmit = (data) => {
    const newObj = {
      trip: data.trip,
      amount: data.amount,
      category: data.category?.value,
      description: data.description,
      date: data.date,
    };

    handleExpensesSubmit(newObj);
    reset();
  };

  return (
    <Dialog fullWidth maxWidth={'md'} onClose={handleClose} open={openExpenses}>
      <DialogTitle>Add Expenses</DialogTitle>
      <DialogContent>
        <Container maxWidth>
          <Box sx={{ mt: 3, mb: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mt: 3, mb: 2 }}>
                <Controller
                  name="amount"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Amount"
                      variant="outlined"
                      size="small"
                      required
                      type="number"
                    />
                  )}
                  control={control}
                />
              </Box>
              <Box sx={{ mt: 3, mb: 2 }}>
                <Controller
                  name="description"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Description"
                      variant="outlined"
                      size="small"
                      required
                    />
                  )}
                  control={control}
                />
              </Box>
              <Box sx={{ mt: 3, mb: 2 }}>
                <FormLabel>Select Expense Category</FormLabel>
                <Controller
                  name="category"
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[
                        { value: category.TRAVEL, label: 'Travel' },
                        { value: category.FUN, label: 'Fun' },
                        { value: category.FOOD, label: 'Food' },
                        {
                          value: category.ACCOMMODATION,
                          label: 'Accommodation',
                        },
                      ]}
                    />
                  )}
                  control={control}
                />
              </Box>

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
export default memo(AddExpensesForm);
