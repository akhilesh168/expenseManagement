import AxiosApi from './axiosConfig';
import { toast } from 'react-toastify';
import { GenericErrorMessage, toastConfig } from '../utils/constants';
export const getAllExpenses = () => {
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '';

  const config = {
    headers: { Authorization: token },
  };
  return AxiosApi.get('/api/expenses/expenses/', config);
};

export const getExpensesById = (tripId) => {
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '';

  const config = {
    headers: { Authorization: token },
  };
  return AxiosApi.get(`/api/expenses/expenses/${tripId}`, config);
};

export const getAllTrips = () => {
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '';

  const config = {
    headers: { Authorization: token },
  };
  return AxiosApi.get('/api/trips/trips', config);
};

export const saveTrip = (payload) => {
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '';

  const config = {
    headers: { Authorization: token },
  };
  return AxiosApi.post('/api/trips/trip', payload, config);
};

export const saveExpense = (payload) => {
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '';

  const config = {
    headers: { Authorization: token },
  };
  return AxiosApi.post('/api/expenses/expense', payload, config);
};

export const updateTrip = () => {};

export const updateExpense = () => {};

export const loginUser = async (dispatch, payload) => {
  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    const response = await AxiosApi.post('/api/users/login', payload);
    const { data } = response;
    if (response.request.status !== 200) {
      toast.error(
        response.response.data.err || GenericErrorMessage,
        toastConfig
      );
      return;
    }
    if (data) {
      localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      return data;
    }
  } catch (err) {
    console.log(err);
    toast.error(err.message || GenericErrorMessage, toastConfig);
    dispatch({ type: 'LOGIN_ERROR', payload: err });
    return;
  }
};

export const registerUser = async (payload) => {
  return AxiosApi.post('/api/users/register', payload);
};

export const logoutUser = (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  localStorage.clear();
};
