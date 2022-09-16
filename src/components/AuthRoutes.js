import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthStateContext } from '../context/Authorization/AuthContext';

export default function AuthRoutes({ children, isPrivate }) {
  const userDetails = useAuthStateContext();
  if (isPrivate && !Boolean(userDetails.token)) {
    return <Navigate to="/login" />;
  }
  return children;
}
