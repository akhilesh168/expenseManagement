import './App.css';
import Home from './components/Home';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Trip from './components/Trips/index';
import Expanses from './components/Expenses/index';
import AllExpenses from './components/Expenses/AllExpenses';
import ResponsiveAppBar from './components/ResponsiveAppBar';
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="trips" element={<Trip />}></Route>
        <Route path="expanses" element={<AllExpenses />}></Route>
        <Route path="dashboard" element={<Navigate to="/" replace />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
