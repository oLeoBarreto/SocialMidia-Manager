import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';

export default function CardData(props) {

    return (
        <ThemeProvider theme={Theme()}>
            <Card
                sx={{ height: '100%' }}
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
                                {props.title}
                            </Typography>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                {props.data}
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
                                {props.children}
                            </Avatar>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}