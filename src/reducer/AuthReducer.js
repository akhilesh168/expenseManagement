const token = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token'))
  : '';
const user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : '';

export const initialState = {
  userDetails: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_LOGIN': {
      return { ...state, loading: true };
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    }
    case 'LOGIN_ERROR': {
      return { ...state, errorMessage: action.error, loading: false };
    }
    case 'LOGOUT': {
      return { ...state, user: '', token: '' };
    }
  }
}

export default AuthReducer;
