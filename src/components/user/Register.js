import {
  Grid,
  FormControlLabel,
  Container,
  Paper,
  Button,
  TextField,
  Box,
  Link,
  Checkbox,
  Avatar,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { registerUser } from '../../api/api';
import { NavLink, useNavigate } from 'react-router-dom';
import { GenericErrorMessage, toastConfig } from '../../utils/constants';
import { toast } from 'react-toastify';

export default function Register() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data);
      if (user) {
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message || GenericErrorMessage, toastConfig);
    }
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Paper elevation={3} sx={{ mt: 5, mb: 4, width: '40vw' }}> */}
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              marginTop: 8,
              width: '25vw',
            }}
          >
            <Box sx={{ pt: 3, pb: 5 }}>
              <Controller
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    size="large"
                    required
                    fullWidth
                  />
                )}
                control={control}
              />
            </Box>
            <Box sx={{ pt: 3, pb: 5 }}>
              <Controller
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    size="large"
                    required
                    fullWidth
                  />
                )}
                control={control}
              />
            </Box>
            <Box sx={{ pt: 3, pb: 5 }}>
              <Controller
                name="password"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    variant="outlined"
                    size="large"
                    type="password"
                    required
                    fullWidth
                  />
                )}
                control={control}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="5vh"
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign up
              </Button>
            </Box>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Grid container sx={{ pt: 3, pb: 5 }}>
              <Grid item xs={12}>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'nav-link'
                  }
                >
                  Already have a account , Click here to sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
