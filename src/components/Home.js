import { Container } from '@mui/system';
import React from 'react';
import Dashboard from './Dashboard';
import ResponsiveAppBar from './ResponsiveAppBar';
import Trip from './Trips';

export default function Home() {
  return (
    <>
      <Container>
        <Dashboard />
      </Container>
    </>
  );
}
