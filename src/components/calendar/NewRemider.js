import * as React from 'react';
import { Button, Typography, Grid, Chip, Stack, Card, CardContent, TextField } from "@mui/material";
import { BusinessCenterRounded, BookmarkRounded, CollectionsBookmarkRounded, LocalPhoneRounded } from '@mui/icons-material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TimePicker } from '@mui/lab';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../Theme';
import Api from '../../api';

export default function NewRemiderCard() {

    const [title, setTitle] = React.useState();
    const [hour, setHour] = React.useState(null);

    React.useEffect(() => {
        Api
            .post('/reminder/newReminder', {
                title: title,
                dateHour: hour,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    return (
        <>
            <ThemeProvider theme={Theme()}>
                <Card
                    component="form"
                    sx={{
                        height: "35 0px", width: "100%", maxWidth: "300px",
                        backgroundColor: "primary.second", margin: '10px'
                    }}
                    autoComplete="off"
                >
                    <CardContent
                        sx={{ marginTop: '15px' }}
                    >
                        <Grid
                            container
                            sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                flexDirection: 'column',
                                borderRadius: '15px',
                            }}
                        >
                            <Grid item>
                                <Typography component="h1" variant="h5" color="primary.light" >
                                    New Reminder
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField fullWidth id="outlined-basic" variant="outlined"
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        setTitle(value);
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography component="h1" variant="h6" color="primary.light"
                                    sx={{ marginTop: '10px' }}
                                >
                                    Reminder type
                                </Typography>
                            </Grid>

                            <Grid sx={{ margin: '15px' }}>
                                <Grid item>
                                    <Stack direction="row" spacing={2}>
                                        <Chip icon={<BusinessCenterRounded />} label="Meeting" color="primary" />
                                        <Chip icon={<CollectionsBookmarkRounded />} label="Post" color="error" />
                                    </Stack>
                                </Grid>
                                <Grid item>
                                    <Stack direction="row" spacing={2}>
                                        <Chip icon={<LocalPhoneRounded />} label="Call" color="success" />
                                        <Chip icon={<BookmarkRounded />} label="Other" color="warning" />
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        value={hour}
                                        onChange={(newValue) => {
                                            setHour(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Button
                                variant="contained"
                                disableElevation
                                fullWidth
                                type="submit"
                                sx={{ marginTop: '10px' }}
                            >
                                Criar Lembrete
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </>
    );
}