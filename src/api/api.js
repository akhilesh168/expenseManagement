import AxiosApi from './axiosConfig';

export const getAllExpenses = () => {
  return AxiosApi.get('/expenses');
};

export const getExpensesById = (tripId) => {
  return AxiosApi.get(`/expenses/${tripId}`);
};

export const getAllTrips = () => {
  return AxiosApi.get('/trips');
};

export const saveTrip = (payload) => {
  return AxiosApi.post('/trip', payload);
};

export const saveExpense = (payload) => {
  return AxiosApi.post('/expense', payload);
};

export const updateTrip = () => {};

export const updateExpense = () => {};
