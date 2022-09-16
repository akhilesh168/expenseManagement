import { Container, Typography, Box, Avatar } from '@mui/material';
import React from 'react';

export default function PageNotFound() {
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <img
              width="500px"
              height="500px"
              src="/static/images/PageNotFound.jpg"
              loading="early"
            />
            <Typography component="h1" variant="h5">
              Page Not Found
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
