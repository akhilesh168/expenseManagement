import { createContext, useContext, useReducer } from 'react';
import AuthReducer, { initialState } from '../../reducer/AuthReducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const useAuthStateContext = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used in authProvider module');
  }
  return context;
};

export const useDispatchStateContext = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
