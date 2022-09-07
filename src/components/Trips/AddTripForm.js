import React, { memo } from 'react';
import {
  Box,
  Container,
  Button,
  DialogContent,
  Dialog,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

function AddTripForm({ openTrip, handleTripSubmit, handleClose }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
    },
  });
  const onSubmit = (data) => {
    handleTripSubmit(data);
    reset();
  };
  return (
    <Dialog fullWidth maxWidth={'md'} onClose={handleClose} open={openTrip}>
      <DialogTitle>Add Trip</DialogTitle>
      <DialogContent>
        <Container>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mt: 2, mb: 3 }}>
                <Controller
                  name="name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Trip Name"
                      variant="outlined"
                      size="small"
                      required
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
export default memo(AddTripForm);
