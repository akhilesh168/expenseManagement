import AllExpenses from '../components/Expenses/AllExpenses';
import PageNotFound from '../components/PageNotFound';
import Trip from '../components/Trips/index';
import Login from '../components/user/Login';
import Register from '../components/user/Register';

export const category = {
  TRAVEL: 'travel',
  FOOD: 'food',
  ACCOMMODATION: 'accommodation',
  FUN: 'fun',
};

export const GenericSuccessFetchMessage = 'Data has been successfully fetched';
export const GenericSuccessSubmitMessage =
  'Data has been successfully submitted';
export const GenericErrorMessage = "Something's gone wrong!";
export const UnexpectedErrorMessage = 'Encountered unexpected error!';

export const toastConfig = {
  theme: 'colored',
  position: 'top-center',
  autoClose: true,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const routes = [
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/register',
    component: Register,
    isPrivate: false,
  },
  {
    path: '/expenses',
    component: AllExpenses,
    isPrivate: true,
  },
  {
    path: '/trips',
    component: Trip,
    isPrivate: true,
  },

  {
    path: '/*',
    component: PageNotFound,
    isPrivate: true,
  },
];
