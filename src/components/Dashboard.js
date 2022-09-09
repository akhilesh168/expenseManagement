import {
  Container,
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import React from 'react';

export default function Dashboard() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={4}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Income
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Transactions
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Max Income
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Transactions
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Last Income
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Transactions
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Max Expense
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Transactions
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Last Expense
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Transactions
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Balance Remaining
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Transactions
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Best Expanse Category
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Transactions
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
