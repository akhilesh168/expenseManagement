import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthRoutes from './components/AuthRoutes';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import { AuthProvider } from './context/Authorization/AuthContext';
import { routes } from './utils/constants';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AuthProvider>
        <ResponsiveAppBar />
        <ToastContainer
          theme="dark"
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AuthRoutes isPrivate={route.isPrivate}>
                  <route.component />
                </AuthRoutes>
              }
            />
          ))}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
