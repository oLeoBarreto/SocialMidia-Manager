import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Twitter } from '@mui/icons-material';
import Theme from '../Theme';

export default function Budget(props) {


  useEffect(() => {
    axios.get("http://localhost:5000/api/twitter").then(response => {
      let data = response.data;
    });
  }, []);

  return (
    <ThemeProvider theme={Theme()}>
      <Card
        sx={{ height: '100%'}}
        {...props}
      >
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="overline"
              >
                Followers
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                3
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: 'customColors.blue',
                  height: 56,
                  width: 56
                }}
              >
                <Twitter />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}