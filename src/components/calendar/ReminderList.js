import * as React from 'react';
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import { RemoveCircleOutline } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import Api from '../../api';

export default function ReminderList() {

    const [reminders, setReminders] = React.useState([]);

    function formatDate(dateInput) {
        let data = new Date(dateInput),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth() + 1).toString().padStart(2, '0'),
            ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    function DeleteReminder(id) {
        Api
            .delete(`/reminder/deleteReminder?Id=${id}`)
            .then(response => {
                console.log(response.status);
            })
            .catch((err) => {
                console.error("Ops! " + err);
            })
    }

    React.useEffect(() => {
        Api
            .get("/reminder/getReminders")
            .then(response => {
                setReminders(response.data);
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
                                                    <IconButton
                                                        onClick={
                                                            () => {
                                                                let reminderID = reminder._id;
                                                                DeleteReminder(reminderID);
                                                            }
                                                        }
                                                    >
                                                        <RemoveCircleOutline />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" component="div" color='primary.light'>
                                                    {formatDate(reminder.dateHour)}
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