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
import {
  useAuthStateContext,
  useDispatchStateContext,
} from '../../context/Authorization/AuthContext';
import { loginUser } from '../../api/api';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GenericErrorMessage, toastConfig } from '../../utils/constants';

export default function Login() {
  const dispatch = useDispatchStateContext();
  const state = useAuthStateContext();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (payload) => {
    try {
      const data = await loginUser(dispatch, payload);
      if (data) {
        if (!data.user) return;
        navigate('/trips', { replace: true });
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
                Sign In
              </Button>
            </Box>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Grid container sx={{ pt: 3, pb: 5 }}>
              <Grid item xs={6}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={6}>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? 'active nav-link' : 'nav-link'
                  }
                >
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
          {/* </Paper> */}
        </Box>
      </Container>
    </>
  );
}
