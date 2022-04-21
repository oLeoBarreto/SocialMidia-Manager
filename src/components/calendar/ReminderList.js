import * as React from 'react';
import { Box, Grid, Paper, Chip, Typography } from '@mui/material';
import { BusinessCenterRounded, BookmarkRounded, CollectionsBookmarkRounded, LocalPhoneRounded, SearchRounded } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import Api from '../../api';

export default function ReminderList() {

    const reminders = [];

    React.useEffect(() => {
        Api
            .get("/reminder/getReminders")
            .then(response => { 
                reminders.push(response.data);
                console.log(reminders)
            })
            .catch((err) => {
                console.error("Ops! erro: " + err);
            });
    }, []);

    return (
        <>
            <ThemeProvider theme={Theme()}>
                <Box
                    sx={{
                        backgroundColor: 'primary.second',
                        maxWidth: '710px',
                        borderRadius: '15px',
                        p: 2,
                        flexGrow: 1,
                    }}
                >
                    {
                        reminders.map((reminder, key) => {
                            return (
                                <Paper
                                    key={key}
                                    sx={{
                                        p: 2,
                                        margin: 'auto',
                                        marginBottom: '10px',
                                        width: '100%',
                                        flexGrow: 1,
                                        backgroundColor: 'primary.main',
                                    }}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item >
                                                    <Typography variant="h5" component="div" color='primary.light'>
                                                        {reminder.title}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography sx={{ cursor: 'pointer' }} variant="body2" color='primary.light'>
                                                        Remove
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" component="div" color='primary.light'>
                                                    {reminder.dateHour}
                                                </Typography>
                                                <Typography variant="subtitle1" component="div" color='primary.light' flexWrap='wrap'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )
                        })
                    }
                </Box>
            </ThemeProvider>
        </>
    );
}