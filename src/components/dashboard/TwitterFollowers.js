import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Twitter, ArrowUpward } from '@mui/icons-material';
import Theme from '../Theme';

export default function Budget(props) {
  return (
    <ThemeProvider theme={Theme()}>
      <Card
        sx={{ height: '100%' }}
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
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ArrowUpward color="customColors.green" />
            <Typography
              color="customColors.green"
              sx={{
                mr: 1
              }}
              variant="body2"
            >
              12%
            </Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >
              Desde de altima semana
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}