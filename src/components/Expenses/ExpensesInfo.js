import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function ExpensesInfo({ expenses }) {
  //const [value] = useLocalStorage('expenses', {});
  return (
    <Container>
      <Grid container>
        {expenses?.length &&
          expenses?.map((item, index) => (
            <Grid item xs={4} key={`${index}${item.category}${item?.amount}`}>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Card sx={{ maxWidth: 275, backgroundColor: '#afbbee' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Total Amount of {item.category} Category
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      Amount {item?.amount}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
